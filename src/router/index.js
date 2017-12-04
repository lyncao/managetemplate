import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
import Login from '../views/pages/Login.vue'
/*
import Error from '../views/pages/404Page.vue'
*/

const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/listpage',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/TablePage'), name: '列表页'}]
    },
    {
      path: '/formpage',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/FormPage'), name: '表单页'}]
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/ChartPage'), name: 'chart'}]
    },
    {
      path: '/404',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/404Page'), name: '404'}]
    },
    {
      path: '/message',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/MessagePage'), name: 'msg'}]
    },
    {
      path: '/icon',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/IconPage'), name: 'icon'}]
    },
    {
      path: '/button',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/ButtonPage'), name: 'button'}]
    },
    {
      path: '/tab',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/TabPage'), name: 'tab'}]
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/LayoutPage'), name: 'layout'}]
    },
    {
      path: '/upload',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/UploadPage'), name: 'upload'}]
    },
    {
      path: '/tree',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/TreePage'), name: 'tree'}]
    },
    {
      path: '/dialog',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/DialogPage'), name: 'dialog'}]
    },
    {
      path: '/timeline',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/TimeLinePage'), name: 'timeline'}]
    },
    {
      path: '/animate',
      name: 'Layout',
      component: Layout,
      icon: 'people',
      noDropdown: true,
      children: [{path: '/', component: _import('pages/AnimationPage'), name: 'timeline'}]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
