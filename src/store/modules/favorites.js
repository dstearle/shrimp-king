import shrimpData from './../../data/shrimpData.js';

const state = {
    
    // Array to store favorited items
    favoritesData: []
    
};

const mutations = {
    
    // Sets the stored data from imports into the favoritesData array
    'SET_FAVS' (state, shrimpData) {
        
        state.favoritesData = shrimpData;
        
    },
    
};

const actions = {
    
    // Sets the initial values for shrimp at start of program
    initFavs: ({commit}) => {
        
        commit('SET_FAVS', shrimpData);
        
    },
    
};

const getters = {
    
    // Getter for available shrimp in Market
    favoritesDataGet: state => {
        
        return state.favoritesData;
        
    }
    
};

export default {
    
    state,
    
    mutations,
    
    actions,
    
    getters
    
}