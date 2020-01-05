<template>
  <div class="page-container">
    <template v-if="post">
      <VArticleHeader class="header" :post="post" />
      <VArticle :html="post.rendered_body" />
      <SaveButton
        class="save"
        @save="savePost"
        @delete="deletePost"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import VArticle from '@/components/VArticle.vue'
import VArticleHeader from '@/components/VArticleHeader.vue'
import SaveButton from '@/components/SaveButton.vue'
import { IQiitaPost } from '@/types/qiita'
import { postStorage } from '@/utils'

  @Component({
    components: {
      VArticle,
      VArticleHeader,
      SaveButton
    }
  })
export default class PostDetail extends Vue {
    /** ポストデータ */
    post: IQiitaPost | null = null;

    /** ポストID */
    get postId (): string {
      return this.$route.params.id
    }

    /** ライフサイクル */
    async mounted (): Promise<void> {
      this.post = await this.$axios.$get<IQiitaPost>(`/items/${this.postId}`)
    }

    /** 記事をローカルに保存する */
    savePost () {
      if (!this.post) {
        return
      }

      postStorage.save(this.post)
    }

    /** 記事をローカルから削除する */
    deletePost () {}
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
