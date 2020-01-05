<template>
  <div class="layout-container">
    <TheHeader />
    <div class="content">
      <nuxt />
    </div>
    <div v-if="isOffline" class="offline-bar">
      <div class="bar">Offline Mode</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheHeader from '@/components/TheHeader.vue'
import { Store } from '@/store'

@Component({
  components: {
    TheHeader
  }
})
export default class DefaultLayout extends Vue {
  $store!: Store

  /** オフラインかどうか */
  get isOffline() {
    return this.$store.state.isOffline
  }
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

  .offline-bar {
    & > .bar {
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      padding: 0 10px;
      font-size: 11px;
      color: #6F6F6F;
      background: #232323;
      border-top-right-radius: 4px;
    }
  }
</style>
