import Vue from "vue";

// For loading data from the database
export const loadData = ({commit}) => {

    Vue.http.get('data.json')

        // Promise that extracts the data and turns it into a javascript object
        .then(response => response.json())
        // The data to be used
        .then(data => {

            // Checks if there is data to be extracted from the database
            if (data) { 
                
                // Stored data for Market
                const shrimpMarketDataLoad = data.shrimpMarketData;
                
                // Stored data for User's funds
                const fundsLoad = data.funds;
                // Stored data for User's Inventory
                const shrimpInventoryDataLoad = data.shrimpInventoryData;

                // Object containing User's funds and inventory
                const portfolioLoad = {

                    fundsLoad,

                    shrimpInventoryDataLoad,

                };

                // Sets the stored data for market from the data base
                commit('SET_STOCKS', shrimpMarketDataLoad);
                // Sets the stored data for the User's funds and inventory from the data base
                commit('SET_PORTFOLIO', portfolioLoad);
            
            }

        });

};