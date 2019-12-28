<template>
  <div>
    <h1>hello you</h1>
    <p>{{ postId }}</p>
    <VArticle v-if="post" :html="post.rendered_body" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import VArticle from "@/components/VArticle.vue";
  import {IQiitaPost} from "@/types/qiita";

  @Component({
    components: {
      VArticle
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

<style lang="sass" scoped>
</style>
