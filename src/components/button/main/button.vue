<template>
  <button :type="btnType" :class="classes" :disabled="disabled">
    <span><slot></slot></span>
    <!--<span>{{type}}</span>-->
    <!--<span v-if="loading"></span>-->
    <!--<span :style="{visibility: loading ? 'hidden' : ''}"><slot></slot></span>-->
  </button>
</template>

<script>
/*
* 需求分析
* props:接收父组件传递属性
* 1.type['primary', 'danger', 'warning', 'hollow', 'disabled']
* 2.size['large', 'small', 'mini']
* 3.disabled: boolean
* 4.btnType:['button', 'submit', 'reset']
* 5.color: String
* 6.loading: boolean --- 与 disabled都会被禁用点击
* */
export default {
  name: 'luck-button',
  props: {
    // 禁用状态
    disabled: Boolean,
    // 表单按钮type类型['button','submit','reset']
    btnType: {
      validator (value) {
        return ['button', 'submit', 'reset'].indexOf(value) > -1
      },
      default: 'button'
    },
    // 按钮几种状态['primary', 'danger', 'warning', 'hollow', 'disabled']
    type: {
      type: String,
      validator (value) {
        return ['primary', 'danger', 'warning', 'hollow', 'disabled'].indexOf(value) > -1
      },
      defalut: 'primary'
    },
    // 按钮大小
    size: {
      type: String,
      validator (value) {
        return ['large', 'small', 'mini'].indexOf(value) > -1
      },
      defalut: 'large'
    },
    color: String,
    // loading状态
    loading: {
      type: Boolean,
      defalut: false
    }
  },
  computed: {
    classes () {
      let miniSty = '' // 迷你按钮
      let typeSty = '' // 按钮类型
      let btnDecoration = '' // 按钮装饰

      // 检测按钮 大小
      if (this.size === 'mini') {
        miniSty = 'luck-btn-mini '
      } else {
        miniSty = this.size === 'large' ? 'luck-btn-block ' : 'luck-btn-small '
      }
      // 检测按钮 类型 (大、小、迷你 都有 这几种按钮类型)
      typeSty = 'luck-btn-' + this.type
      // 检测是否禁用
      if (this.disabled) {
        typeSty = 'luck-btn-disabled'
      }

      return miniSty + typeSty + btnDecoration
    }
  }
}
</script>

<style lang="less">
@import "../../../styles/components/button";
</style>
