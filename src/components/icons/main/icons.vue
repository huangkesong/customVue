<template>
  <i class="icon-normal" :class="classs" :style="styles">{{color}}</i>
</template>

<script>
import {isColor} from '../../../utils/common'
export default {
  name: 'luck-icons',
  props: {
    name: String,
    color: {
      validate (v) {
        if (!v) return true
        return isColor(v)
      }
    },
    size: {
      validate (v) {
        return /^(\.|\d+\.)?\d+(px|rem)/.test(v)
      },
      default: '.6rem'
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 样式
    classs () {
      if (this.custom) {
        return 'icon-custom-' + this.name
      }
      return 'luck-icons-' + this.name
    },
    styles () {
      const styles = {}
      if (this.size) {
        styles.fontSize = this.size
      }
      if (this.color) {
        styles.color = this.color
      }
      return styles
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../../styles/components/icons.less";
</style>
