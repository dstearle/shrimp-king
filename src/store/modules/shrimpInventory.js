const state = {
    
    // User's available funds
    funds: 1000,
    // User's stock of shrimp
    shrimpInventoryData: []
    
};

const mutations = {
    
    // Mutation for buying shrimp
    'BUY_STOCK'(state, {shrimpId, quantity, shrimpPrice}) {
        
        // Checks to see which items are already in the array
        const record = state.shrimpInventoryData.find(element => element.id == shrimpId);
        
        // If item already exists then add to its quantity
        if (record) {
            
            record.quantity += quantity;
            
        }
        
        // If item is not in the array then add it
        else { state.shrimpInventoryData.push({
            
            id: shrimpId,
            
            quantity: quantity
            
            });
        }
        
        // Updates funds when an item is purchased
        state.funds -= shrimpPrice * quantity;
        
    },
    
    // Mutation for selling shrimp
    'SELL_STOCK' (state, {shrimpId, quantity, shrimpPrice}) {
        
        // Checks to see which items are already in the array
        const record = state.shrimpInventoryData.find(element => element.id == shrimpId);
        
        // Detracts from quantity
        if (record.quantity > quantity) {
            
            record.quantity -= quantity;
            
        }
        
        // Removes the item from the array if amount sold is the amount available
        else {
            
            state.shrimpInventoryData.splice(state.shrimpInventoryData.indexOf(record), 1);
            
        }
        
        // Updates funds when items are sold
        state.funds += shrimpPrice * quantity;
        
    },

    // Mutation for loading saved data for User's funds and inventory
    'SET_PORTFOLIO' (state, portfolioLoad) {

        state.funds = portfolioLoad.fundsLoad;
        state.shrimpInventoryData = portfolioLoad.shrimpInventoryDataLoad ? portfolioLoad.shrimpInventoryDataLoad : [];

    }
    
};

const actions = {
    
    // Action for when a sale is made
    sellShrimp({commit}, order) {
        
        // Sale transaction
        commit('SELL_STOCK', order);

        // Adds the quantity sold to market quantity
        commit('ADD_QUANTITY', order);
        
    }
    
};

const getters = {
    
    // Getter for available shrimp in Inventory
    shrimpInventoryDataGet (state, getters) {
        
        // Transfers data from Market to Inventory
        return state.shrimpInventoryData.map(shrimp => {
            
            // Gets the stored data from Market
            const record = getters.shrimpMarketDataGet.find(element => element.id == shrimp.id);
            
            return {
                
                id: shrimp.id,
                
                quantity: shrimp.quantity,
                
                name: record.name,
                
                price: record.price,

                photo: record.photo,

                alt: record.alt,

                overlayText: record.overlayText,

                tags: record.tags,

                favorited: record.favorited,

                text: record.text,

                button: record.button,

                border: record.border
                
            }
            
        });
        
    },
    
    // Getter for funds
    funds (state) {
        
        return state.funds;
        
    }
    
};

export default {
    
    state,
    
    mutations,
    
    actions,
    
    getters
    
}