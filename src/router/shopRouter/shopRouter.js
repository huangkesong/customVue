// 商城路由
export default [
  {
    path: '/productlist',
    name: 'productlist',
    component: () => import('@/shop/productlist')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/shop/detail')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('@/shop/address')
  },
  {
    path: '/success/:id',
    name: 'success',
    component: () => import('@/shop/success')
  },
  {
    path: '/order/:id',
    name: 'order',
    component: () => import('@/shop/order')
  }
]
