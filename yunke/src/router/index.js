import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Shouye from '@/components/shouye'
import Introduce from '@/components/introduce'
import Product from '@/components/product'
import Apply from '@/components/apply'
import Talking from '@/components/talking'
import Partner from '@/components/partner'
import About from '@/components/about'
import Bot from '@/components/bot'

Vue.use(Router)

export default new Router({
  routes: [
	{ path: '/', 
		redirect: '/shouye',
		component: Shouye
	},
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/shouye',
      name: 'shouye',
      component: Shouye
    },
    {
    	path: '/introduce',
      name: 'introduce',
      component: Introduce
    },
    {
    	path: '/product',
      name: 'product',
      component: Product
    },
    {
    	path: '/apply',
      name: 'apply',
      component: Apply
    },
    {
    	path: '/talking',
      name: 'talking',
      component: Talking
    },
    {
    	path: '/partner',
      name: 'partner',
      component: Partner
    },
    {
    	path: '/about',
      name: 'about',
      component: About
    },
    {
    	path: '/login',
      name: 'login',
      component: Login
    },
    {
    	path: '/bot',
      name: 'bot',
      component: Bot
    }
  ]
})
