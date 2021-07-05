import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)// Make BootstrapVue available throughout the project
Vue.use(IconsPlugin)//Install the BootstrapVue icon components plugin
new Vue({
render: h => h(App),
}).$mount('#app')

