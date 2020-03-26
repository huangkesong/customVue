<template>
  <div class="luck-grids-itembox">
    <!--路由-->
    <router-link class="luck-grids-item"  :to="link || ''" v-if="type === 'link'">
      <div class="luck-grids-icon" v-if="checkIcon">
        <slot name="icon"></slot>
      </div>
      <div class="luck-grids-txt" v-if="checkText">
        <slot name="text"></slot>
      </div>
      <div class="luck-grids-txt mt20" v-if="checkTextA">
        <slot name="moreText"></slot>
      </div>
    </router-link>
    <!--a 标签-->
    <a class="luck-grids-item" :href="link" v-else-if="type === 'a'">
      <div class="luck-grids-icon" v-if="checkIcon">
        <slot name="icon"></slot>
      </div>
      <div class="luck-grids-txt" v-if="checkText">
        <slot name="text"></slot>
      </div>
      <div class="luck-grids-txt mt20" v-if="checkTextA">
        <slot name="moreText"></slot>
      </div>
    </a>
    <!--默认什么都没有-->
    <div class="luck-grids-item"  v-else>
      <div class="luck-grids-icon" v-if="checkIcon">
        <slot name="icon"></slot>
      </div>
      <div class="luck-grids-txt" v-if="checkText">
        <slot name="text"></slot>
      </div>
      <div class="luck-grids-txt mt20" v-if="checkTextA">
        <slot name="moreText"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'luck-grids-item',
  props: {
    type: {
      validate (v) {
        return ['link', 'a'].indexOf(v) > -1
      },
      default: 'link'
    },
    link: [String, Object]
  },
  mounted () {
    // console.log(this.$slots)
  },
  computed: {
    checkIcon () {
      return !!this.$slots.icon
    },
    checkText () {
      return !!this.$slots.text
    },
    checkTextA () {
      return !!this.$slots.moreText
    }
  }
}
</script>

<style lang="less">
  @import "../../../styles/components/grids.less";
  .mt20{
    margin-top: .2rem;
  }
</style>
