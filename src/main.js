import Vue from 'vue';
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from "./routes";
import store from "./store"

import api from "./api/index.js";
Vue.prototype.$api=api;

import App from './App.vue';
//import admin from './components/admin.vue';
Vue.config.productionTip = false
 
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

