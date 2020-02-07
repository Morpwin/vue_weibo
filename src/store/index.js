import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		articleList: []
  },
  mutations: {
		getArticle(state,data) {
			state.articleList = data
		}
  },
  actions: {
		getArticleFun(context, data) {
			context.commit("getArticle",data)
		}
  },
  modules: {
		
  }
})
