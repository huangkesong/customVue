<template>
  <luck-layout>
    <h1 class="demo-logo"><img src="../assets/images/logo.png" @click="showConsole"></h1>
    <h2 class="demo-detail-title ptb">自定义一套Vue2.x的移动端&微信UI</h2>
    <!--组-->
    <luck-grids-group rows="4">
      <luck-grids-item type="link" :link="i.link" v-for="(i, index) in lists" :key="index">
        <i slot="icon"
           :class="i.icon"
        ></i>
        <span slot="text">{{i.name}}</span>
      </luck-grids-item>
    </luck-grids-group>
  </luck-layout>
</template>

<script>
export default {
  data () {
    return {
      lastClickTime: 0,
      count: 0,
      // TODO
      mes: 'huangkesong',
      lists: [
        { icon: 'luck-icons-button', name: 'Button', link: '/button' },
        { icon: 'luck-icons-dialog', name: 'Dialog', link: '/dialog' },
        { icon: 'luck-icons-cell', name: 'Cell', link: '/cell' },
        { icon: 'luck-icons-icons', name: 'Icons', link: '/icons' },
        { icon: 'luck-icons-grids', name: 'Grids', link: '/grids' },
        { icon: 'luck-icons-list', name: 'List', link: '/list' },
        { icon: 'luck-icons-slider', name: 'Slider', link: '/slider' }
      ]
    }
  },
  methods: {
    hasClass (obj, cls) {
      return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
    },
    addClass (obj, cls) {
      if (!this.hasClass(obj, cls)) obj.className += '' + cls
    },
    toggleClass (obj, cls) {
      if (this.hasClass(obj, cls)) {
        this.removeClass(obj, cls)
      } else {
        this.addClass(obj, cls)
      }
    },
    removeClass (obj, cls) {
      if (this.hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
        obj.className = obj.className.replace(reg, ' ')
      }
    },
    showConsole () {
      let _nowTime = new Date().getTime()
      if (_nowTime - this.lastClickTime < 2000) { // 3s内 点击次数
        this.count++
      } else {
        this.count = 0
      }
      // 重新赋值给最后点击的时间
      this.lastClickTime = _nowTime
      if (this.count >= 5) {
        // TODO
        let __consoleId = document.getElementById('__vconsole')
        this.toggleClass(__consoleId, 'show')
        this.count = 0 // 归0
      }
    }
  }
}
</script>

<style lang="less">
@import "../assets/css/style";
#__vconsole {
  display: none
}
.show {
  display: block !important;
}
</style>
