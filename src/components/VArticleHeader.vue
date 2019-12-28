<template>
  <div class="v-article-header">
    <h1 class="title">{{ post.title }}</h1>
    <div class="tags">
      <a
        v-for="tag in post.tags"
        :key="tag.name"
        class="item"
        :href="`https://qiita.com/tags/${tag.name}`"
      >
        {{ tag.name }}
      </a>
    </div>
    <div class="author">
      <img
        class="avatar"
        :src="post.user.profile_image_url"
        :alt="post.user.id"
      >
      <a class="username" :href="`https://qiita.com/${post.user.id}`">
        {{ username }}
      </a>
      <div class="datetime">
        {{ datetime }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator';
  import dayjs from "dayjs";
  import {IQiitaPost} from "@/types/qiita";

  @Component
  export default class VArticleHeader extends Vue {
    /** ポストデータ */
    @Prop({ type: Object, required: true })
    post!: IQiitaPost;

    /** ユーザーネーム */
    get username(): string {
      const { name, id } = this.post.user;

      if (!name) {
        return `@${id}`;
      }

      return `${name} (@${id})`;
    }

    /** 投稿日時 */
    get datetime (): string {
      return dayjs(this.post.created_at).format('YYYY/MM/DD HH:mm')
    }
  }
</script>

<style lang="scss" scoped>
  .v-article-header {
    .title {
      margin-bottom: 16px;
      font-size: 40px;
      font-weight: bold;
      line-height: 1.4;
    }

    & > .tags {
      margin-top: 24px;
    }

    & > .tags > .item {
      padding: 4px 8px;
      margin-bottom: 4px;
      font-size: 14px;
      color: #666;
      text-align: center;
      text-decoration: none;
      background: #eee;
      border-radius: 4px;
    }

    & > .tags > .item:not(:last-child) {
      margin-right: 8px;
    }

    & > .tags > .item:hover {
      text-decoration: underline;
    }

    & > .author {
      display: flex;
      align-items: center;
      margin-top: 24px;
    }

    & > .author > .avatar {
      width: 32px;
      height: 32px;
      margin-right: 6px;
      border-radius: 2px;
    }

    & > .author > .username {
      font-size: 14px;
      color: $_text;
      text-decoration: none;
    }

    & > .author > .username:hover {
      text-decoration: underline;
    }

    & > .author > .datetime {
      margin-left: auto;
      font-size: 12px;
      color: rgba($_text, 0.6);
    }
  }
</style>
