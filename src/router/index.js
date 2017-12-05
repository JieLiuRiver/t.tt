import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/views/index'], resolve),
      children: [
        {
          path: 'home',
          name: 'home',
          component: resolve => require(['@/views/home'], resolve),
        },
        {
          path: 'category',
          name: 'category',
          component: resolve => require(['@/views/category'], resolve)
        }
      ]
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: resolve => require(['@/views/shopcar'], resolve)
    },
    {
      path: '/mine',
      name: 'mine',
      component: resolve => require(['@/views/mine'], resolve)
    },
    {
      path:'/login',
      name: 'login',
      meta: {
        title: '用户登录 - 锤子科技'
      },
      component: resolve => require(['@/views/login'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '用户注册 - 锤子科技'
      },
      component: resolve => require(['@/views/register'], resolve)
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      meta: {
        title: '忘记秘密 - 锤子科技'
      },
      component: resolve => require(['@/views/forgot_password'], resolve)
    }
  ]
})
