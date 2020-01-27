const state = {

    // Array to store available shrimp for the Market
    selectedTags: []
    
};


// const actions = {
    
//     // 
    
// };

const getters = {
    
    // Getter for available shrimp in Market
    selectedTagsGet: state => {
        
        return state.selectedTags;
        
    }
    
};