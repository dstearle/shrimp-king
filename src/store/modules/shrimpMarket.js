import shrimpData from './../../data/shrimpData.js';

const state = {
    
    // Array to store available shrimp for the Market
    shrimpMarketData: []
    
};

const mutations = {
    
    // Sets the stored data from imports into the array
    'SET_STOCKS' (state, shrimpData) {
        
        state.shrimpMarketData = shrimpData;
        
    },
    
    // Randomizes the prices for each shrimp
    'RND_PRICES' (state) {
        
        state.shrimpMarketData.forEach(shrimp => {

            // Randomizes the price for each available shrimp between their minimum and maximum prices
            shrimp.price = Math.round((Math.random() * (shrimp.priceMax - shrimp.priceMin + 1)) + shrimp.priceMin);

        });
        
    },

    // Randomizes the prices for each shrimp
    'PRICE_TRACKER' (state) {
        
        // Foreach loop to update weeklyPrices for each item when a new day occurs
        state.shrimpMarketData.forEach(shrimp => {

            // Removes the oldest price from the array
            shrimp.weeklyPrices.shift();

            // Sets the current day's price into the array
            shrimp.weeklyPrices.push(shrimp.price);

        });
        
    },

    // Randomizes the quantities for each shrimp
    'RND_QUANTITY' (state) {
        
        state.shrimpMarketData.forEach(shrimp => {

            // Randomizes the quantity for each available shrimp between their minimum and maximum quantities
            shrimp.quantity = Math.round((Math.random() * (shrimp.quantityMax - shrimp.quantityMin + 1)) + shrimp.quantityMin);

        });
        
    },

    // For reducing the quantity of a shrimp in the market
    'SUBTRACT_QUANTITY' (state, {shrimpId, quantity}) {
        
        // Retrieves the available shrimps in the market
        const record = state.shrimpMarketData.find(element => element.id == shrimpId);
        
        // Subtracts the market quantity from purchase quantity
        record.quantity -= quantity;
        
    },

    // For reducing the quantity of a shrimp in the market
    'ADD_QUANTITY' (state, {shrimpId, quantity}) {
        
        // Retrieves the available shrimps in the market
        const record = state.shrimpMarketData.find(element => element.id == shrimpId);
        
        // Subtracts the market quantity from purchase quantity
        record.quantity += quantity;
        
    },
    
};

const actions = {
    
    // Action for buying shrimp
    buyShrimp: ({commit}, order) => {
        
        // Commints the transaction
        commit('BUY_STOCK', order);

        // Subtracts from market quantity
        commit('SUBTRACT_QUANTITY', order);
        
    },
    
    // Sets the initial values for shrimp at start of program
    initStocks: ({commit}) => {
        
        commit('SET_STOCKS', shrimpData);
        
    },
    
    // Randomizes the prices and quantities for shrimp in the market
    randomizeStocks: ({commit}) => {
        
        // Randomizes the prices for shrimp in the market
        commit('RND_PRICES', shrimpData);

        // Randomizes quantities for shrimp in the market
        commit('RND_QUANTITY', shrimpData);

        // Updates the data to be used by the dashboard chart
        commit('PRICE_TRACKER', shrimpData)
        
    },
    
};

const getters = {
    
    // Getter for available shrimp in Market
    shrimpMarketDataGet: state => {
        
        return state.shrimpMarketData;
        
    }
    
};

export default {
    
    state,
    
    mutations,
    
    actions,
    
    getters
    
}