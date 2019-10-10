import Vue from 'vue';
import Vuex from 'vuex';

import dashboardChart from './modules/dashboardChart.js';
import shrimpMarket from './modules/shrimpMarket.js';
import shrimpInventory from './modules/shrimpInventory.js';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({

    actions,
    
    modules: {

        dashboardChart,
        
        shrimpMarket,
        
        shrimpInventory,

    }
    
});