import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '初始页',
      component: Home
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/goodsManage',
      name: '用户管理',
      component: Home,
      children: [
        { path: 'baseInfo', component: () => import('../components/baseInfo.vue'), name: '基础信息' }
      ]
    },
    {
      path: '/components',
      name: '商城管理',
      component: Home,
      children: [
        { path: 'goodsManage', component: () => import('../components/goodsManage.vue'), name: '商品类目' }
      ]
    },
    {
      path: '/provideManage',
      name: '供应管理',
      component: Home,
      children: [
        { path: 'deliveryOrder', component: () => import('../components/provideManage/deliveryOrder.vue'), name: '提货单' },
        { path: 'deliveryDemand', component: () => import('../components/provideManage/deliveryDemand.vue'), name: '提货需求池' }
      ]
    }
  ]
})
