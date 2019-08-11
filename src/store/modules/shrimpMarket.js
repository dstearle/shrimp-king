import shrimpData from './../../data/shrimpData.js';

const state = {
    
    shrimpData: []
    
};

const mutations = {
    
    'SET_STOCKS' (state, shrimpData) {
        
        state.shrimpData = shrimpData;
        
    },
    
    'RND_STOCKS' (state) {
        
        state.shrimpData.forEach(shrimp => {

            shrimp.price = Math.round(shrimp.price * (1 + Math.random() - 0.5));

        });
        
    }
    
};

const actions = {
    
    buyStock: ({commit}, order) => {
        
        commit('BUY_STOCK', order);
        
    },
    
    initStocks: ({commit}) => {
        
        commit('SET_STOCKS', shrimpData);
        
    },
    
    randomizeStocks: ({commit}) => {
        
        commit('RND_STOCKS', shrimpData);
        
    }, 
    
};

const getters = {
    
    shrimp: state => {
        
        return state.shrimpData;
        
    }
    
};

export default {
    
    state,
    
    mutations,
    
    actions,
    
    getters
    
}