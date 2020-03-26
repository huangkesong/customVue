<template>
  <div class="luck-btn-title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'luck-button-title',
  data () {
    return {
      // TODO
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.luck-btn-title {
  padding: .35rem 0rem .1rem;
  font-size: .28rem;
  text-align: left;
  color: #f00;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid #cccc;
  margin-bottom: .2rem;
  text-shadow: 0.015rem 0.015rem 0.0123rem #d1f704;
}
</style>
