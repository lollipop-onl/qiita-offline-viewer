<template>
  <div>
    <VHeading>保存したポスト</VHeading>
    <VPost
      v-for="post in savedPosts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import VHeading from '@/components/VHeading.vue'
import VPost from '@/components/VPost.vue'
import { postStorage } from '@/utils'

@Component({
  components: {
    VHeading,
    VPost
  }
})
export default class SavedPage extends Vue {
  /** 保存されたポスト */
  get savedPosts () {
    return postStorage.sortedSavedPosts
  }
}
</script>

<style lang="scss" scoped>
</style>
