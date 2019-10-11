const state = {
    
    // Array to hold the labels for the chart
    weekDayArray:  [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ],
    
};

const mutations = {

    // Mutation for loading saved X axis labels
    'SET_LABELS' (state, portfolioLoad) {
        
        state.weekDayArray = portfolioLoad.weekDayArrayLoad;
        
    },

    // Mutation for updating the X axis labels
    'LABEL_CHANGE' (state) {

        // Takes the first element from the labels array and pushes it to the end of the array
        state.weekDayArray.push(state.weekDayArray.shift());

    }
    
};

const actions = {

    // Action for when the user has ended the day
    dayChange({commit}) {
        
        // Updates X axis labels
        commit('LABEL_CHANGE');

    }
    
};

const getters = {
    
    // Getter for dashboard chart X axis labels
    weekDayArrayGet: state => {
        
        return state.weekDayArray;
        
    }
    
};

export default {
    
    state,
    
    mutations,
    
    actions,
    
    getters
    
}