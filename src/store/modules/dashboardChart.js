const state = {
    
    // Array to hold the labels for the chart
    weekDayArray:  [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ],

    // Counter for keeping track of favorited items
    favoritesMax: 1
    
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

    },

    // Mutation for bumping the counter up
    'FAV_UP' (state) {

        // Takes the first element from the labels array and pushes it to the end of the array
        state.favoritesMax++;

    },

    // Mutation for bumping the counter up
    'FAV_DOWN' (state) {

        // Takes the first element from the labels array and pushes it to the end of the array
        state.favoritesMax--;

    },
    
};

const actions = {

    // Action for when the user has ended the day
    dayChange({commit}) {
        
        // Updates X axis labels
        commit('LABEL_CHANGE');

    },

    // Action adding plus one to the favoritesMax
    favUp({commit}) {
        
        // Bumps the counter up by one
        commit('FAV_UP');

    },

    // Action adding plus one to the favoritesMax
    favDown({commit}) {
        
        // Bumps the counter up by one
        commit('FAV_DOWN');

    },
    
};

const getters = {
    
    // Getter for dashboard chart X axis labels
    weekDayArrayGet: state => {
        
        return state.weekDayArray;
        
    },

    // Getter for dashboard chart X axis labels
    favoritesMaxGet: state => {
        
        return state.favoritesMax;
        
    }
    
};

export default {
    
    state,
    
    mutations,
    
    actions,
    
    getters
    
}