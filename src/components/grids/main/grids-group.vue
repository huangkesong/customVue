<template>
  <div class="grids">
    <div class="luck-gridstitle" v-if="title">{{title}}</div>
    <div :class="classes">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'luck-grids-group',
  props: {
    rows: {
      validate (v) {
        return ['2', '3', '4', '5'].indexOf(v + '') > -1
      },
      default: '4'
    },
    title: String
  },
  computed: {
    classes () {
      return 'luck-grids-' + this.rows
    }
  }
}
</script>

<style lang="less">
</style>
