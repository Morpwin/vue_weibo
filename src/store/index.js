import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		headerFlag: true
  },
  mutations: {
		changeHeaderFlag(state,data) {
			state.headerFlag = data
		}
  },
  actions: {
		changeHeaderFlagFun(context, data) {
			context.commit("changeHeaderFlag",data)
		}
  },
  modules: {
		
  }
})
