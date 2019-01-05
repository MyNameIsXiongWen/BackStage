import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '初始页',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/login',
      name: '登陆页',
      component: () => import('../components/login.vue')
    },
    {
      path: '/client',
      name: '用户管理',
      component: Home,
      children: [
        { path: 'baseInfo', component: () => import('../components/baseInfo.vue'), name: '基础信息' }
      ]
    },
    {
      path: '/goodsManage',
      name: '商城管理',
      component: Home,
      children: [
        { path: 'goodsManage', component: () => import('../components/goodsManage.vue'), name: '商品类目' }
      ]
    },
    {
      path: '/orderManage',
      name: '订单管理',
      component: Home
    },
    {
      path: '/activityManage',
      name: '活动管理',
      component: Home
    },
    {
      path: '/houseManage',
      name: '小区管理',
      component: Home
    },
    {
      path: '/provideManage',
      name: '供应管理',
      component: Home,
      children: [
        { path: 'deliveryOrder', component: () => import('../components/provideManage/deliveryOrder.vue'), name: '提货单' },
        { path: 'deliveryDemand', component: () => import('../components/provideManage/deliveryDemand.vue'), name: '提货需求池' }
      ]
    },
    {
      path: '/systemManage',
      name: '系统管理',
      component: Home
    }
  ]
})
