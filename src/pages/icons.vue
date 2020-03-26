<template>
  <luck-layout>
    <luck-grids-group rows="4" title="覆盖组件原有icon">
      <luck-grids-item v-for="(item, index) in iconList" :key="index" type="link">
        <luck-icons slot="icon" :name="item.icon"></luck-icons>
        <span slot="text">{{item.name}}</span>
        <span slot="moreText">{{item.icon}}</span>
      </luck-grids-item>
    </luck-grids-group>
    <!--自定义custom icons-->
    <luck-grids-group rows="2" title="自定义custom icons">
      <luck-grids-item v-for="(item, index) in customList" :key="index">
        <luck-icons slot="icon" :name="item.icon" custom>asd</luck-icons>
        <div slot="text">{{item.name}}</div>
        <div slot="moreText">{{item.icon}}</div>
      </luck-grids-item>
    </luck-grids-group>
  </luck-layout>
</template>

<script>
export default {
  data () {
    return {
      // TODO
      iconList: [
        {icon: 'yangsha', name: '扬沙'},
        {icon: 'baoxue', name: '暴雪'},
        {icon: 'daxue', name: '大雪'},
        {icon: 'xiaoxue', name: '小雪'},
        {icon: 'zhongxue', name: '中雪'},
        {icon: 'yujiaxue', name: '雨夹雪'},
        {icon: 'zhenyu', name: '阵雨'},
        {icon: 'zhenxue', name: '阵雪'},
        {icon: 'shachenbao', name: '沙尘暴'},
        {icon: 'wu', name: '雾'},
        {icon: 'zhongyu', name: '中雨'},
        {icon: 'qiangshachenbao', name: '强沙尘暴'},
        {icon: 'qing', name: '晴'},
        {icon: 'tedabaoyu', name: '特大暴雨'},
        {icon: 'yin', name: '阴'},
        {icon: 'mai', name: '霾'},
        {icon: 'duoyun', name: '多云'},
        {icon: 'xiaoyu', name: '小雨'},
        {icon: 'leizhenyu', name: '雷阵雨'},
        {icon: 'fuchen', name: '浮沉'},
        {icon: 'bingbao', name: '雷阵雨伴有冰雹'},
        {icon: 'dayu', name: '大雨'},
        {icon: 'dabaoyu', name: '大暴雨'},
        {icon: 'dongyu', name: '冻雨'},
        {icon: 'baoyu', name: '暴雨'}
      ],
      customList: [
        {icon: 'ranqizao', name: '燃气灶'},
        {icon: 'zazhiji', name: '榨汁机'},
        {icon: 'xiyiji', name: '洗衣机'},
        {icon: 'weibolu', name: '微波炉'}
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@import "../assets/css/icons";
</style>
