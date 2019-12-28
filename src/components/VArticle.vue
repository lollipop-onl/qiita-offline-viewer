<template>
  <div class="v-article" v-html="html" />
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'nuxt-property-decorator';

  @Component
  export default class VArticle extends Vue {
    @Prop({ type: String, required: true })
    html!: string;
  }
</script>

<style lang="scss">
  .v-article {
    & {
      color: $_text;
      line-height: 1.5;
    }

    h1 {
      padding-bottom: 3px;
      margin-top: 64px;
      margin-bottom: 24px;
      font-size: 29px;
      font-weight: bold;
      border-bottom: 1px solid #ddd;
    }

    h2 {
      padding-bottom: 2px;
      margin-top: 56px;
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #ddd;
    }

    h3 {
      margin-top: 50px;
      margin-bottom: 24px;
      font-size: 22px;
      font-weight: bold;
    }

    h4 {
      margin-top: 42px;
      margin-bottom: 24px;
      font-size: 19px;
      font-weight: bold;
    }

    h5, h6 {
      margin-top: 35px;
      margin-bottom: 24px;
      font-size: 16px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      line-height: 1.9;
    }

    p + p {
      margin-top: 1.5em;
    }

    em {
      font-style: italic;
    }

    strong {
      font-weight: bold;
    }

    del {
      text-decoration: line-through;
    }

    a {
      color: #4aac00;
      text-decoration: none;
    }

    a:visited {
      color: #6200ac;
    }

    a:hover {
      text-decoration: underline;
    }

    ul, ol {
      padding-left: 24px;
      margin: 24px 0;
      line-height: 1.9;

      ul, ol {
        margin: 0;
      }

      ul {
        list-style-type: circle;
      }

      p {
        margin: 1em 0;
      }
    }

    ul {
      list-style-type: disc;
    }

    ol {
      list-style-type: decimal;
    }

    dl {
      margin: 24px 0;
    }

    dt {
      font-weight: bold;
    }

    dd {
      padding-left: 32px;
    }

    input[type=checkout][disabled] {
      cursor: not-allowed;
    }

    table {
      display: block;
      margin: 24px 0;
      overflow: auto;
      border-left: 1px solid #dddddd;
      border-collapse: collapse;
    }

    tr:nth-child(odd) {
      background: #eee;
    }

    th {
      padding: 8px 10px;
      font-weight: bold;
      background-color: #fff;
      border-top: 1px solid #ddd;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }

    td {
      max-width: 600px;
      padding: 8px 10px;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }

    blockquote {
      padding: 18px 0 18px 18px;
      margin: 25px 0;
      color: #777;
      border-left: 5px solid #ddd;
    }

    img {
      max-width: 100%;
      margin: 24px 0;
    }

    hr {
      height: 2px;
      margin: 44px 0;
      background: #ddd;
      border: 0;
    }

    sub, sup {
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.5em;
    }

    sup {
      top: -0.5em;
    }

    code {
      padding: 2px 6px;
      font-family: monospace;
      color: #4a4a4a;
      background: #eee;
      border-radius: 3px;
    }

    .code-frame {
      margin: 20px -16px;
      padding: 12px 16px;
      color: #e3e3e3;
      background: #364549;

      .code-lang {
        display: inline-block;
        padding: 2px 4px;
        font-size: 12px;
        color: #eee;
        background-color: #777;
        transform: translateY(-12px);
      }

      .highlight {
        margin: 8px;
        overflow-x: auto;
        font-family: monospace;
        font-size: 14px;
      }
    }

    .footnotes li,
    .footnotes p {
      font-size: 14px;
    }

    sup:target {
      background: #ff0;
    }
  }
</style>
