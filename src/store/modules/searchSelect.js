const state = {

    // Array to store available shrimp for the Market
    selectedTags2: []
    
};

const mutations = {
    
    // Sets the stored data from imports into the array
    'ADD_TAG' (state, tag) {
        
        state.selectedTags2.push(tag);
        
    }, 
    
};

const actions = {
    
    // Adds a new tag to the state
    addTag: ({commit, tag}) => {
        
        commit('ADD_TAG', tag);
        
    }, 
    
};

const getters = {
    
    // Getter for available shrimp in Market
    selectedTags2Get: state => {
        
        return state.selectedTags2;
        
    }
    
};

export default {
    
    state,

    mutations,
    
    actions,
    
    getters
    
}