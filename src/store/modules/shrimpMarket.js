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
    'RND_PRICES' (state) {
        
        state.shrimpDataMarket.forEach(shrimp => {

            // Randomizes the price for each available shrimp between their minimum and maximum prices
            shrimp.price = Math.round((Math.random() * (shrimp.priceMax - shrimp.priceMin + 1)) + shrimp.priceMin);

        });
        
    },

    // Randomizes the quantities for each shrimp
    'RND_QUANTITY' (state) {
        
        state.shrimpDataMarket.forEach(shrimp => {

            // Randomizes the quantity for each available shrimp between their minimum and maximum quantities
            shrimp.quantity = Math.round((Math.random() * (shrimp.quantityMax - shrimp.quantityMin + 1)) + shrimp.quantityMin);

        });
        
    },

    // For reducing the quantity of a shrimp in the market
    'SUBTRACT_QUANTITY' (state, {shrimpId, quantity}) {
        
        // Retrieves the available shrimps in the market
        const record = state.shrimpDataMarket.find(element => element.id == shrimpId);
        
        // Subtracts the market quantity from purchase quantity
        record.quantity -= quantity;
        
    },

    // For reducing the quantity of a shrimp in the market
    'ADD_QUANTITY' (state, {shrimpId, quantity}) {
        
        // Retrieves the available shrimps in the market
        const record = state.shrimpDataMarket.find(element => element.id == shrimpId);
        
        // Subtracts the market quantity from purchase quantity
        record.quantity += quantity;
        
    },
    
};

const actions = {
    
    buyShrimp: ({commit}, order) => {
        
        commit('BUY_STOCK', order);

        commit('SUBTRACT_QUANTITY', order);
        
    },
    
    // Sets the initial values for shrimp at start of program
    initStocks: ({commit}) => {
        
        commit('SET_STOCKS', shrimpData);
        
    },
    
    // Randomizes the prices and quantities for shrimp in the market
    randomizeStocks: ({commit}) => {
        
        commit('RND_PRICES', shrimpData);

        commit('RND_QUANTITY', shrimpData);
        
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