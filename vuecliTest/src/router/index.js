import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import add from '@/components/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/Hi',    
      component: Hi,
      children:[
        {path:'Hi1',name:'nameHi1',component:Hi1},
        {path:'Hi2',name:'nameHi2',component:Hi2},
      ]
    }
  ]
})
