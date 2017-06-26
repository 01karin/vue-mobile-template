import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home = r => require.ensure([], () => r(require('../views/home')))
const login = r => require.ensure([], () => r(require('../views/auth/login')))

const routes = [
	/*{path:"",redirect:"/home"},
	{path: "/home",component:home},
	{path: "/login",component:login}*/
	{path:"",redirect:"/login"},
	{path: "/login",component:login},
	{path: "/home",component:home}
]
export default new Router({
	routes
})
