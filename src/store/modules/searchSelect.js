const state = {

    // Set to store unique tags
    selectedTags: new Set(),

    selectedTagsTracker: 1
    
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

    // Allows selectedTags to be reactive
    'TAG_LIST_TRACKER'() {

        state.selectedTagsTracker++

    }
    
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
        
    },

    // Getter for selected tags
    selectedTagsTrackerGet: state => {
        
        return state.selectedTagsTracker;
        
    },
    
};

export default {
    
    state,

    mutations,
    
    actions,
    
    getters
    
}