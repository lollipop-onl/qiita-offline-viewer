<template>
  <label class="search-field">
    <input
      v-bind="$attrs"
      v-model="reactiveValue"
      type="text"
      class="field"
    >
    <div class="icon" />
    <div class="border" />
  </label>
</template>

<script lang="ts">
  import { Component, Model, Vue } from 'nuxt-property-decorator';

  @Component({
    inheritAttrs: false
  })
  export default class SearchField extends Vue {
    /** 入力値 */
    @Model('input', { type: String, required: true })
    value!: string;

    /** リアクティブな入力値 */
    get reactiveValue(): string {
      return this.value;
    }

    set reactiveValue(value: string) {
      this.$emit('input', value);
    }
  }
</script>

<style lang="scss" scoped>
  .search-field {
    & {
      position: relative;
      display: block;
      padding-bottom: 8px;
    }

    & > .icon {
      position: absolute;
      top: 3px;
      left: 12px;
      width: 10px;
      height: 10px;
      border: 2px solid $_text;
      border-radius: 50%;
    }

    & > .icon::before {
      position: absolute;
      right: 0;
      bottom: 0;
      display: block;
      width: 2px;
      height: 8px;
      content: '';
      background: $_text;
      transform: rotate(135deg) translateX(-50%);
      transform-origin: center bottom;
    }

    & > .border {
      width: 100%;
      height: 1px;
      margin-top: 8px;
      background: rgba($_text, 0.3);
    }

    & > .field {
      width: 100%;
      box-sizing: border-box;
      padding-left: 42px;
      font-size: 14px;
      line-height: 24px;
      background: none;
      border: 0;
      outline: none;
    }

    & > .field:focus ~ .icon,
    & > .field:not(:placeholder-shown) ~ .icon {
      border-color: $_qiita
    }

    & > .field:focus ~ .icon::before,
    & > .field:not(:placeholder-shown) ~ .icon::before {
      background: $_qiita;
    }

    & > .field:focus ~ .border {
      background-color: $_qiita;
    }
  }
</style>
