import Vue from 'vue'
import Router from 'vue-router'
//配置一级路由
import Index from '@/components/Index'
import Video from '@/components/Video'
import Toutiao from '@/components/Toutiao'
import Me from '@/components/Me'

//配置我的网页的二级路由、
import Join from '@/components/Me/Join'
import Dashang from '@/components/Me/Dashang'
import Hezuo from '@/components/Me/Hezuo'




Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    },
    {
      path: '/Toutiao',
      name: 'Toutiao',
      component: Toutiao
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me,
      children:[
           {
		      path: '/Me/',
		      name: 'Join',
		      component: Join
		    }, 
		    {
		      path: '/Me/Dashang',
		      name: 'Dashang',
		      component: Dashang
		    },
		     {
		      path: '/Me/Hezuo',
		      name: 'Hezuo',
		      component: Hezuo
		    },
		      ]
    },
  ]
})
