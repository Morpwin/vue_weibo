import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '.././pages/home/Home'
import Article from '.././pages/article/Article'
import Content from '.././pages/content/Content'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Home',
	component: Home	
},{
	path: '/article',
	name: 'Article',
	component: Article
},{
	path: '/content/:articleId',
	name: 'Content',
	component: Content
}
]

const router = new VueRouter({
  routes
})

export default router
