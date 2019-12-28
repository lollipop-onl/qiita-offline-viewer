<template>
  <div class="the-header-drawer">
    <div class="drawer-menu">
      <button class="close" @click.prevent="close">
        <span class="icon" />
      </button>
      <ul class="menu-list">
        <li
          v-for="menu in menuList"
          :key="menu.url"
          class="item"
        >
          <n-link
            class="link"
            :to="menu.url"
            @click.native="close"
          >
            {{ menu.title }}
          </n-link>
        </li>
      </ul>
    </div>
    <div class="foundation" @click.prevent="close" />
  </div>
</template>

<script lang="ts">
  import { Component, Emit, Vue } from 'nuxt-property-decorator';

  @Component
  export default class TheHeaderDrawer extends Vue {
    /** メニューリスト */
    get menuList() {
      return [
        { title: 'フィード', url: '/' },
        { title: '検索', url: '/search' },
        { title: '保存したポスト', url: '/saved' }
      ]
    }

    /** closeするイベントを送る */
    @Emit() close(): void {}
  }
</script>

<style lang="scss" scoped>
  .the-header-drawer {
    & {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    & > .foundation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(#000, 0.5);
      cursor: pointer;
    }
  }

  .drawer-menu {
    & {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 300px;
      height: 100%;
      background: $_white;
    }

    & > .close {
      position: absolute;
      top: 24px;
      right: 18px;
      width: 42px;
      height: 42px;
      background: none;
      border: 0;
      transform: translateY(-50%);
    }

    & > .close > .icon {
      position: relative;
      display: block;
      width: 20px;
      margin: 0 auto;
    }

    & > .close > .icon::before,
    & > .close > .icon::after {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 20px;
      height: 2px;
      margin: 0 auto;
      content: '';
      background: $_text;
    }

    & > .close > .icon::before {
      transform: rotate(45deg);
    }

    & > .close > .icon::after {
      transform: rotate(-45deg);
    }
  }

  .menu-list {
    & {
      margin-top: 70px;
    }

    & > .item > .link {
      display: block;
      padding: 12px 30px;
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 1.5;
      color: $_text;
      text-decoration: none;
    }

    & > .item > .link:hover {
      background: rgba($_qiita, 0.1);
    }
  }
</style>
