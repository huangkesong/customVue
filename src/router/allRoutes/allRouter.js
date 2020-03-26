// 路由集合
export default [
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/pages/icons')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('@/pages/button')
  },
  {
    path: '/grids',
    name: 'grids',
    component: () => import('@/pages/grids')
  },
  {
    path: '/slider',
    name: 'slider',
    component: () => import('@/pages/slider')
  },
  // 重定向
  { path: '/', redirect: '/index' }
]
