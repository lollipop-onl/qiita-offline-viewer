<template>
  <div class="page-container">
    <VHeading>検索</VHeading>
    <form
      class="form"
      @submit.prevent="search"
    >
      <SearchField
        v-model="keywordValue"
        class="field"
        placeholder="qiita user:yaotti"
      />
      <button class="search" type="submit">
        検索
      </button>
    </form>
    <template v-if="searchResult.length > 0">
      <VHeading>検索結果</VHeading>
      <VPost
        v-for="post in searchResult"
        :key="post.id"
        :post="post"
      />
    </template>
    <template v-else>
      <p class="empty">
        検索結果がありません
      </p>
    </template>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import VHeading from "@/components/VHeading.vue";
  import SearchField from "@/components/SearchField.vue";
  import VPost from "@/components/VPost.vue";
  import {IQiitaPost} from "@/types/qiita";

  @Component({
    components: {
      VHeading,
      SearchField,
      VPost
    }
  })
  export default class SearchPage extends Vue {
    /** キーワードの入力値 */
    keywordValue = '';

    /** 検索キーワード */
    searchKeyword = '';

    /** 検索結果 */
    searchResult: IQiitaPost[] = [];

    /** 検索を実行する */
    async search(): Promise<void> {
      if (!this.keywordValue) {
        return;
      }

      this.searchResult = await this.$axios.$get('/items', {
        params: {
          query: this.keywordValue
        }
      })

      this.searchKeyword = this.keywordValue;
    }
  }
</script>

<style lang="scss" scoped>
  .page-container {
    & > .empty {
      margin-top: 80px;
      font-size: 16px;
      text-align: center;
      color: rgba($_text, 0.6);
      line-height: 1.5;
    }
  }
</style>
