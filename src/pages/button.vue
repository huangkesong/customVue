<template>
  <luck-layout>
    <div class="buttonBox">
      <luck-button-title>迷你按钮</luck-button-title>
      <luck-button type="primary" size="mini">基础</luck-button>
      <luck-button type="warning" size="mini">警告</luck-button>
      <luck-button type="danger" size="mini">危险</luck-button>
      <luck-button type="hollow" size="mini">空洞</luck-button>
      <luck-button type="disabled" size="mini">禁用</luck-button>
      <luck-button-title>小按钮</luck-button-title>
      <luck-button type="primary">primary</luck-button>
      <luck-button type="warning" >warning</luck-button>
      <luck-button type="danger" >danger</luck-button>
      <luck-button type="hollow" >hollow</luck-button>
      <luck-button type="disabled" >disabled</luck-button>
      <luck-button-title>大按钮</luck-button-title>
      <luck-button type="primary" size="large">基础</luck-button>
      <luck-button type="warning" size="large">警告</luck-button>
      <luck-button type="danger" size="large">危险</luck-button>
      <luck-button type="hollow" size="large">空洞</luck-button>
      <luck-button type="disabled" size="large" disabled>禁用</luck-button>
    </div>
  </luck-layout>
</template>

<script>
export default {
  data () {
    return {
      // TODO
    }
  },
  methods: {}
}
</script>

<style lang="less">
.buttonBox{
  margin-top: .5rem;
  padding: 0 .24rem;
  text-align: left;
}
</style>
