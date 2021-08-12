import Vue from 'vue'
import App from './App'
// 引入vuex
import store from './store/index.js'
Vue.prototype.$store = store
// 引入全局组件
import divider from './components/naraku-ui/divider.vue';
import notThing from './components/naraku-ui/naraku-on-thing.vue'
Vue.config.productionTip = false
Vue.component('divider',divider)
Vue.component('no-thing',notThing)
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
