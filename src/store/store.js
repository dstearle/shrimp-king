import Vue from 'vue';
import Vuex from 'vuex';

import shrimpMarket from './modules/shrimpMarket.js';
import shrimpInventory from './modules/shrimpInventory';
import favorites from './modules/favorites';


import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({

    actions,
    
    modules: {
        
        shrimpMarket,
        
        shrimpInventory,

        favorites
        
    }
    
});