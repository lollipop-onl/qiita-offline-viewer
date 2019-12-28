<template>
  <n-link :to="postUrl" class="v-post">
    <img
      class="avatar"
      :src="post.user.profile_image_url"
      :alt="post.user.name"
    >
    <div class="title">{{ post.title }}</div>
    <div class="author">by {{ post.user.name || post.user.id }}</div>
    <div class="datetime">{{ datetime }}</div>
  </n-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import dayjs from 'dayjs';
import { IQiitaPost } from '@/types/qiita';

@Component
export default class VPost extends Vue {
  /** Qiitaのポストオブジェクト */
  @Prop({ type: Object, required: true })
  post!: IQiitaPost;

  /** 投稿日時 */
  get datetime(): string {
    return dayjs(this.post.created_at).format('YYYY/MM/DD HH:mm')
  }

  /** ポストのURL */
  get postUrl(): string {
    return `/post/${this.post.id}`
  }
}
</script>

<style lang="scss" scoped>
  .v-post {
    & {
      display: grid;
      grid-template:
        'avatar title  title title'    auto
        'avatar author .     datetime' auto
        /64px   auto   1fr   auto;
      padding: 16px 0;
      color: $_text;
      text-decoration: none;
    }

    & > .avatar {
      display: block;
      grid-area: avatar;
      width: 52px;
      height: 52px;
      border-radius: 8px;
    }

    & > .title {
      grid-area: title;
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 1.5;
    }

    & > .author {
      grid-area: author;
    }

    & > .datetime {
      grid-area: datetime;
    }

    & > .author,
    & > .datetime {
      font-size: 12px;
      color: rgba($_text, 0.6);
    }

    &:hover > .title {
      text-decoration: underline;
    }
  }
</style>
