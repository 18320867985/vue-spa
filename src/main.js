import Vue from 'vue';
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";
import App from './App.vue';
import {routes} from "./routes.js";

Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({routes,mode:"history"})

Vue.config.productionTip = false
 
new Vue({
  render: h => h(App),
  
  router
}).$mount('#app')

