<template>
  <div class="v-heading">
    <div class="title">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

  @Component
export default class VHeading extends Vue {
}
</script>

<style lang="scss" scoped>
  .v-heading {
    & > .title {
      margin: 24px 0 18px;
      font-size: 18px;
      line-height: 1.5;
    }
  }
</style>
