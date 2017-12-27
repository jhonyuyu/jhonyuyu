import Vue from 'vue'
import Router from 'vue-router'

import articleCom from '../components/articleCom'
import mainMes from '../components/mainMes'
import sideSec from '../components/sideSec'
import userSec from '../components/userSec'

Vue.use(Router)

export default new Router({
  routes: [{
  	 path:'/',
  	 name:'RootPath',
  	 components:{
  	 	main:mainMes
  	 },
  },
  {
        path: '/topic/:id',
        name: 'articleRoute',
        components: {
            main: articleCom,
            side: sideSec,
        },
    }, {
        path: '/user/:name',
        name: 'userRoute',
        components: {
            main: userSec,
        },
    }, {
        path: '/user/:name',
        redirect: '/user:name',
    
  }]
})
