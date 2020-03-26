import '../styles/base.less'
// 引入组件
import Layout from './layout'
import {GroupGrids, GroupItem} from './grids'
import Icons from './icons'
import {Slider, SliderItem} from './slider'
import {Button, ButtonTitle} from './button'

const components = [
  Layout, // 布局
  Button, // 按钮
  ButtonTitle, // 分割头
  GroupGrids, // 网格
  GroupItem, // 网格子组件
  Slider,
  SliderItem,
  Icons // Icons图标
]
// 注册组件
const install = function (Vue) {
  // Vue.component(Layout.name, Layout)
  // Vue.component(GroupGrids.name, GroupGrids)
  // Vue.component(GroupItem.name, GroupItem)
  // 遍历所有的组件
  components.map(component => Vue.component(component.name, component))
}

// 全局化
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
