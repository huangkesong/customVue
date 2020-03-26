import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import allRouter from './allRoutes/allRouter' // 组件按 “块” 区分
import shopRouter from './shopRouter/shopRouter' // shop

import LUCK from '../components/luck.js' // 引入组件库

Vue.use(Router)

Vue.use(LUCK)

export default new Router({
  // mode: 'history',
  // base: '/custom/',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    ...allRouter,
    ...shopRouter
  ]
})
