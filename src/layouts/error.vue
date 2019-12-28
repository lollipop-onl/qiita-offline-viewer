<template>
  <div class="error-page">
    <p class="statuscode">{{ statusCode }}</p>
    <p class="message">
      <template v-if="statusCode === 404">
        ページが見つかりませんでした
      </template>
      <template v-else>
        エラーが発生しました
      </template>
    </p>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator';

  @Component
  export default class ErrorPage extends Vue {
    /** ステータスコード */
    @Prop({ type: Object, default: null })
    error!: Record<string, any> | null;

    /** ステータスコード */
    get statusCode(): number {
      return this.error?.statusCode ?? 500;
    }
  }
</script>

<style lang="scss" scoped>
  .error-page {
    & {
      padding-top: 80px;
    }

    & > .statuscode {
      margin-bottom: 30px;
      font-size: 24px;
      color: rgba($_text, 0.8);
      text-align: center;
    }

    & > .message {
      font-size: 16px;
      text-align: center;
      color: rgba($_text, 0.6);
      line-height: 1.5;
    }
  }
</style>
