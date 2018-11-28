import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/components',
      name: '',
      component: Home,
      children: [
        {
          path: 'baseInfo',
          component: () => import('@/components/baseInfo.vue'),
          name: '基础信息'
        }
      ]
    },
    {
      path: '/components',
      name: '',
      component: Home,
      children: [
        {
          path: 'goodsManage',
          component: () => import('@/components/goodsManage.vue'),
          name: '商品类目'
        }
      ]
    }
  ]
})
