import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.min.js"
import 'jquery'
import "@/assets/styles/border.css"
import "@/assets/styles/base.css"
import 'swiper/dist/css/swiper.css'
import 'lib-flexible'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

router.beforeEach((to, from, next) => {
    /*路由发生改变修改页面的title */
		if(to.meta.title) {
			document.title = to.meta.title
		}
		next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
