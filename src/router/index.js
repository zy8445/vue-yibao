import Vue from 'vue'
import Router from 'vue-router'
import pos from '@/components/pos'
import cunjing from '@/components/cunjing'
import home from '@/components/home'
import jingcai from '@/components/jingcai'
import water from '@/components/water'
import line from '@/components/line'
import about from '@/components/about'
import story from '@/components/story'
import brand from '@/components/brand'
import pinpai from '@/components/pinpai'
import serve from '@/components/serve'
import buy from '@/components/buy'
import care from '@/components/care'
import gongyi from '@/components/gongyi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: pos
    },
    {
      path: '/cunjing',
      name: 'cunjing',
      component: cunjing,
      children:[
        {path:"",name:"about",component:about},
        {path:"story",name:"story",component:story},
        {path:"brand",name:"brand",component:brand}
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/jingcai',
      name: 'jingcai',
      component: jingcai,
      children:[
        {path:"",name:"pinpai",component:pinpai},
        {path:"gongyi",name:"gongyi",component:gongyi}
      ]
    },
    {
      path: '/water',
      name: 'water',
      component: water
    },
    {
      path: '/line',
      name: 'line',
      component: line,
      children:[
        {path:"",name:"serve",component:serve},
        {path:"buy",name:"buy",component:buy},
        {path:"care",name:"care",component:care}
      ]
    }
  ]
})
