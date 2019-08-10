import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter ({
    
  mode: 'history',
  
  routes: routes
  
});

new Vue({
    
  el: '#app',
  
  router,
  
  render: h => h(App)
  
})
