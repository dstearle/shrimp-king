import shrimpData from './../../data/shrimpData.js';

const state = {
    
    // Array to store favorited items
    // favoritesData: []
    
};

const mutations = {
    
    // Sets the stored data from imports into the favoritesData array
    // 'SET_FAVS' (state, shrimpData) {
        
    //     state.favoritesData = shrimpData;
        
    // },

    // For adding a shrimp to favorites
    'FAV_ITEM' (state, {shrimpId}) {
        
        // Retrieves the available shrimps
        const record = this.$store.state.shrimpMarketDataGet.find(element => element.id == shrimpId);
        
        // Sets the shrimp to favorites
        record.favorited === true;
        
    },

    // For removing a shrimp from favorites
    'UNFAV_ITEM' (state, {shrimpId}) {
        
        // Retrieves the available shrimps
        const record = this.$store.state.shrimpMarketDataGet.find(element => element.id == shrimpId);
        
        // Removes the shrimp from favorites
        record.favorited === false;
        
    },
    
};

const actions = {
    
    // Sets the initial values for shrimp at start of program
    // initFavs: ({commit}) => {
        
    //     commit('SET_FAVS', shrimpData);
        
    // },

    // Action to set item to favorites
    favItem: ({commit}) => {
        
        commit('FAV_ITEM', shrimpData);
        
    },

    // Action to remove item from favorites
    unFavItem: ({commit}) => {
        
        commit('UNFAV_ITEM', shrimpData);
        
    },
    
};

const getters = {
    
    // Getter for available shrimp in Market
    // favoritesDataGet: state => {
        
    //     return state.favoritesData;
        
    // }
    
};

export default {
    
    state,
    
    mutations,
    
    actions,
    
    getters
    
}