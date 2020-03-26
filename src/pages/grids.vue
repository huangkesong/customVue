<template>
<luck-layout>
  <!--2列-->
  <luck-grids-group rows="2" title="等分两列（带图标）">
    <luck-grids-item>
      <luck-icons slot="icon" name="yangsha"></luck-icons>
      <span slot="text">图标</span>
    </luck-grids-item>
    <luck-grids-item type="link">
      <luck-icons slot="icon" name="baoyu"></luck-icons>
      <span slot="text">自定义图片</span>
    </luck-grids-item>
  </luck-grids-group>
  <!--3列-->
  <luck-grids-group rows="3" title="等分三列（不带图标）">
    <luck-grids-item v-for="(i, index) in 6" :key="index">
      <span slot="text">自定义Text{{i}}</span>
    </luck-grids-item>
  </luck-grids-group>
  <!--4列-->
  <luck-grids-group rows="4" title="等分四列（不带图标）">
    <luck-grids-item v-for="(i, index) in 8" :key="index">
      <span slot="text">自定义Text{{i}}</span>
    </luck-grids-item>
  </luck-grids-group>
  <!--5列-->
  <luck-grids-group rows="5" title="等分五列（不带图标）">
    <luck-grids-item v-for="(i, index) in 5" :key="index">
      <span slot="text">自定义Text{{i}}</span>
    </luck-grids-item>
  </luck-grids-group>
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

<style lang="less" scoped>
  @import "../assets/css/icons";
</style>
