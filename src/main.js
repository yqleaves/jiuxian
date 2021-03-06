import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@common/components/index"
import VueTouch from "vue-touch";
import VueLazyload from 'vue-lazyload'
import "./lib/loading/index"
import observer from "./utils/observer"
Vue.prototype.$observer = observer;
Vue.use(VueLazyload)
Vue.use(VueTouch,{name:"v-touch"})


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
