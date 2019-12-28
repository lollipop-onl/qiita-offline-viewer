<template>
  <button
    class="save-button"
    :class="{ '-saved': saved }"
    @click.prevent="onButtonClick"
  >
    <template v-if="saved">
      <span class="check-icon">
        <span class="check" />
      </span>
    </template>
    <template v-else>
      <span class="save-icon">
        <span class="arrow" />
        <span class="board" />
      </span>
    </template>
  </button>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator';

  @Component
  export default class SaveButton extends Vue {
    /** 保存されたポストかどうか */
    @Prop({ type: Boolean, default: true })
    saved!: false;

    /** ボタンが押されたら親にイベントを伝える */
    onButtonClick(): void {
      const eventName = this.saved ? 'delete' : 'save';

      this.$emit(eventName);
    }
  }
</script>

<style lang="scss" scoped>
  .save-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: $_qiita;
    border: 0;
    border-radius: 50%;
  }

  .save-button.-saved {
    background: #aaa;
  }

  .check-icon {
    & {
      padding-left: 6px;
      transform: rotate(45deg);
    }

    & > .check,
    & > .check::before {
      display: block;
      width: 2px;
      background: #fff;
    }

    & > .check {
      position: relative;
      height: 20px;
    }

    & > .check::before {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 12px;
      content: '';
      transform: translateX(1px) rotate(-90deg);
      transform-origin: center bottom;
    }
  }

  .save-icon {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;

    & > .arrow {
      position: absolute;
      top: 0;
      left: 50%;
      display: block;
      width: 2px;
      height: 18px;
      background: #fff;
      transform: translateX(-50%);
    }

    & > .arrow::before,
    & > .arrow::after {
      position: absolute;
      bottom: 0;
      display: block;
      width: 2px;
      height: 12px;
      content: '';
      background: #fff;
      transform-origin: center bottom;
    }

    & > .arrow::before {
      transform: translateX(-0.5px) rotate(45deg);
    }

    & > .arrow::after {
      transform: translateX(0.5px) rotate(-45deg);
    }

    & > .board {
      position: absolute;
      bottom: 0;
      left: 50%;
      display: block;
      width: 20px;
      height: 4px;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
      transform: translateX(-50%);
    }
  }
</style>
