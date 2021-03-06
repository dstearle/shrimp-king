import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faStar, faSave, faBook, faHourglassEnd, faTags, faGlobe, faCrown, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { routes } from './routes';
import store from './store/store.js';

library.add([faInfoCircle, faStar, faSave, faBook, faHourglassEnd, faTags, faGlobe, faCrown, faGithubAlt, faTimes, faTimesCircle]);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);
Vue.use(VueResource);

// VueResource link to firebase database
Vue.http.options.root = 'https://shrimp-king-25cda.firebaseio.com/';

// Applies currency filter to funds (turns 100 to ¥100)
Vue.filter('currency', (value) => {

  const dong = '¥';
  return dong + value.toLocaleString();

});

Vue.config.productionTip = false

// Cleans up the address bar directory
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
