<template>
  <div class="layout-container">
    <TheHeader />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheHeader from '@/components/TheHeader.vue'

  @Component({
    components: {
      TheHeader
    }
  })
export default class DefaultLayout extends Vue {
}
</script>

<style lang="scss" scoped>
  .layout-container {
    & {
      padding-top: 48px;
      overflow: hidden;
    }

    & > .content {
      box-sizing: border-box;
      width: 100%;
      max-width: 608px;
      padding: 0 12px;
      margin: 0 auto;
    }
  }
</style>
