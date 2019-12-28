<template>
  <nav class="the-header">
    <n-link class="title" to="/">
      Qiita Offline Viewer
    </n-link>
    <button class="close">
      <span class="icon" />
    </button>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

  @Component
export default class TheHeader extends Vue {
}
</script>

<style lang="scss" scoped>
  .the-header {
    & {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      width: 100%;
      height: 48px;
      padding: 0 18px;
      background: $_qiita;
    }

    & > .title {
      font-size: 18px;
      color: $_text-light;
      text-decoration: none;
    }

    & > .close {
      width: 42px;
      height: 42px;
      padding: 0;
      margin: 0;
      background: none;
      border: 0;
    }

    & > .close > .icon,
    & > .close > .icon::before,
    & > .close > .icon::after {
      display: block;
      width: 24px;
      height: 2px;
      background: $_white;
    }

    & > .close > .icon {
      position: relative;
      margin: 0 auto;
    }

    & > .close > .icon::before,
    & > .close > .icon::after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
    }

    & > .close > .icon::before {
      transform: translateY(9px);
    }

    & > .close > .icon::after {
      transform: translateY(-9px);
    }
  }
</style>
