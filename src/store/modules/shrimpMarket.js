import shrimpData from './../../data/shrimpData.js';

const state = {
    
    // Array to store available shrimp for the Market
    shrimpDataMarket: []
    
};

const mutations = {
    
    // Sets the stored data in ShrimpData into the array
    'SET_STOCKS' (state, shrimpData) {
        
        state.shrimpDataMarket = shrimpData;
        
    },
    
    // Randomizes the prices for each shrimp
    'RND_STOCKS' (state) {
        
        state.shrimpDataMarket.forEach(shrimp => {

            shrimp.price = Math.round(shrimp.price * (1 + Math.random() - 0.5));

        });
        
    }
    
};

const actions = {
    
    buyShrimp: ({commit}, order) => {
        
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
    
    // Getter for available shrimp in Market
    shrimpDataMarketGet: state => {
        
        return state.shrimpDataMarket;
        
    }
    
};

export default {
    
    state,
    
    mutations,
    
    actions,
    
    getters
    
}