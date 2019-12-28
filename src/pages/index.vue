<template>
  <div>
    <VHeading>フィード</VHeading>
    <VPost
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import VHeading from '@/components/VHeading.vue'
import VPost from '@/components/VPost.vue'

@Component({
  components: {
    VHeading,
    VPost
  }
})
export default class IndexPage extends Vue {
  posts: any[] = [];

  async mounted () {
    const data = await this.$axios.$get('/items')

    this.posts = data
  }
}
</script>

<style lang="scss" scoped>
</style>
