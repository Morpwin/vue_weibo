import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '.././pages/home/Home'
import Article from '.././pages/article/Article'
import Content from '.././pages/content/Content'
import Message from '.././pages/message/Message'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Home',
	component: Home	,
	meta: {title: "孜然粉的博客"}
},{
	path: '/article',
	name: 'Article',
	component: Article,
	meta: {title: "文章 - 孜然粉的博客"}
},{
	path: '/content',
	name: 'Content',
	component: Content
},{
	path: '/message',
	name: 'Message',
	component: Message,
	meta: {title: "留言板 - 孜然粉的博客"}
}
]

const router = new VueRouter({
	mode: "history",
  routes
})

export default router
