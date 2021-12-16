import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
Vue.config.productionTip = false

// modules use
Vue.use(require("vue-moment"));

// Vue.prototype.$http = axios;
// const token = localStorage.getItem("token");
// if (token) {
//   Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
