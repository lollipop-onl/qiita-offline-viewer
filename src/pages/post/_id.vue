<template>
  <div class="page-container">
    <template v-if="post">
      <VArticleHeader class="header" :post="post" />
      <VArticle :html="post.rendered_body" />
    </template>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import VArticle from "@/components/VArticle.vue";
  import VArticleHeader from "@/components/VArticleHeader.vue";
  import {IQiitaPost} from "@/types/qiita";

  @Component({
    components: {
      VArticle,
      VArticleHeader
    }
  })
  export default class PostDetail extends Vue {
    /** ポストデータ */
    post: IQiitaPost | null = null;

    /** ポストID */
    get postId(): string {
      return this.$route.params.id
    }

    /** ライフサイクル */
    async mounted(): Promise<void> {
      this.post = await this.$axios.$get<IQiitaPost>(`/items/${this.postId}`);
    }
  }
</script>

<style lang="scss" scoped>
  .page-container {
    & {
      padding-top: 32px;
    }

    & > .header {
      margin-bottom: 32px;
    }
  }
</style>
