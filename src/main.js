import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import VueRouter from 'vue-router';

import { routes } from './routes';
import store from './store/store.js';

Vue.use(VueRouter);

//Applies currency filter to funds (turns 100 to $100)
Vue.filter('currency', (value) => {

  const dong = '¥';
  return dong + value.toLocaleString();

});

Vue.config.productionTip = false

const router = new VueRouter ({
    
  mode: 'history',
  
  routes: routes
  
});

new Vue({
    
  el: '#app',
  
  router,

  store,
  
  render: h => h(App)
  
})
