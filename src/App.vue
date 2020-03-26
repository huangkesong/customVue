<template>
  <div id="app">
    <router-view/>
    <!--底部导航条-->

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
// 全局引入字体库
@import './styles/components/icons.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
