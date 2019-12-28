<template>
  <div class="layout-container">
    <TheHeader class="header" />
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
    }

    & > .header {
      position: fixed;
      top: 0;
      left: 0;
    }
  }
</style>
