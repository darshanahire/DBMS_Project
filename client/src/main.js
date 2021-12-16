import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
Vue.config.productionTip = false

// modules use
Vue.use(require("vue-moment"));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
