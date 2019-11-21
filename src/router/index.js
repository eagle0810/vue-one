import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import my from '../pages/my.vue'
import gouwu from '../pages/gouwu.vue'
import home from '../pages/home.vue'
import fenlei from '../pages/fenlei.vue'
import xiangqing from '../pages/xiangqing.vue'
import pc from '../pages/pc/pc.vue'
import amd from '../pages/pc/amd.vue'
import classs from '../pages/pc/classs.vue'
import lunbo from '../pages/pc/lunbo.vue'
import shop from '../pages/pc/shop.vue'
import vip from '../pages/pc/vip.vue'
import deng from '../pages/deng.vue'
import zhuce from '../pages/zhuce.vue'
import shopChange from '../pages/pc/shopChange.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      component:index,
      children:[
        {
          path:'home',
          component:home
        },
        {
          path:'my',
          component:my
        },
        {
          path:'fenlei',
          component:fenlei
        },
        {
          path:'gouwu',
          component:gouwu
        }
      ]
    },
    {
      path:'/xiangqing',
      component:xiangqing
    },
    {
      path:'/pc',
      component:pc,
      children:[
        {
          path:'amd',
          component:amd
        },
        {
          path:'classs',
          component:classs
        },
        {
          path:'lunbo',
          component:lunbo
        },
        {
          path:'shop',
          component:shop
        },
        {
          path:'vip',
          component:vip
        },
        {
          path:'shopChange',
          component:shopChange
        }
      ]
    },
    {
      path:'/deng',
      component:deng
    },
    {
      path:'/zhuce',
      component:zhuce
    }
  ]
})
