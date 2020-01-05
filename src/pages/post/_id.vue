<template>
  <div class="page-container">
    <template v-if="optimizedPost">
      <VArticleHeader
        :post="optimizedPost"
        class="header"
      />
      <VArticle :html="optimizedPost.rendered_body" />
      <SaveButton
        class="save"
        :saved="!!savedPost"
        @save="savePost"
        @delete="deletePost"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'nuxt-property-decorator'
import VArticle from '@/components/VArticle.vue'
import VArticleHeader from '@/components/VArticleHeader.vue'
import SaveButton from '@/components/SaveButton.vue'
import { IQiitaPost } from '@/types/qiita'
import { Store } from '@/store'
import { postStorage } from '@/utils'

  @Component({
    components: {
      VArticle,
      VArticleHeader,
      SaveButton
    }
  })
export default class PostDetail extends Vue {
    $store!: Store

    /** データキャッシュ更新用のタイムスタンプ */
    timestamp = Date.now()

    /** ポストデータ */
    post: IQiitaPost | null = null;

    /** ポストID */
    get postId (): string {
      return this.$route.params.id
    }

    /** Offlineかどうか */
    get isOffline () {
      return this.$store.state.isOffline
    }

    /** 保存されたポスト */
    get savedPost (): IQiitaPost | void {
      // eslint-disable-next-line no-unused-expressions
      this.timestamp

      return postStorage.restore(this.postId)
    }

    /** ポスト */
    get optimizedPost (): IQiitaPost | void | null {
      if (this.isOffline) {
        return this.savedPost
      }

      return this.post
    }

    @Watch('isOffline', { immediate: true })
    async onChangeOfflineStatus (): Promise<void> {
      if (this.isOffline || this.post) {
        return
      }

      this.post = await this.$axios.$get<IQiitaPost>(`/items/${this.postId}`)
    }

    /** 記事をローカルに保存する */
    savePost () {
      if (!this.post) {
        return
      }

      postStorage.save(this.post)

      this.timestamp = Date.now()
    }

    /** 記事をローカルから削除する */
    deletePost () {
      postStorage.delete(this.postId)

      this.timestamp = Date.now()
    }
}
</script>

<style lang="scss" scoped>
  .page-container {
    & {
      padding-top: 32px;
      padding-bottom: 120px;
    }

    & > .header {
      margin-bottom: 32px;
    }

    & > .save {
      position: fixed;
      right: 18px;
      bottom: 32px;
    }
  }
</style>
