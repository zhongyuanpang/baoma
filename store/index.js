import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		city: '' //当前城市
	},
	mutations: {
		setCity(state, city) {
			state.city = city
			// console.log(state.city)
		}
	},
	actions: {}
})
export default store
