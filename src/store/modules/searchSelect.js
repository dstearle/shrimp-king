const state = {

    // Set to store unique tags
    selectedTags: new Set()
    
};

const mutations = {
    
    // Adds the chosen tag to the set
    'ADD_TAG' (state, tag) {
        
        state.selectedTags.add(tag);
        
    }, 

    // Removes the chosen tag to the set
    'DELETE_TAG' (state, tag) {
        
        state.selectedTags.delete(tag);
        
    },
    
};

const actions = {
    
    // Adds a new tag to the state
    addTag: ({commit, tag}) => {
        
        commit('ADD_TAG', tag);
        
    }, 
    
};

const getters = {
    
    // Getter for selected tags
    selectedTagsGet: state => {
        
        return state.selectedTags;
        
    }
    
};

export default {
    
    state,

    mutations,
    
    actions,
    
    getters
    
}