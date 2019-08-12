const state = {
    
    // User's available funds
    funds: 1000,
    // User's stock of shrimp
    shrimpDataInventory: []
    
};

const mutations = {
    
    // Mutation for buying shrimp
    'BUY_STOCK'(state, {shrimpId, quantity, shrimpPrice}) {
        
        // Checks to see which items are already in the array
        const record = state.shrimpDataInventory.find(element => element.id == shrimpId);
        
        // If item already exists then add to its quantity
        if (record) {
            
            record.quantity += quantity;
            
        }
        
        // If item is not in the array then add it
        else { state.shrimpDataInventory.push({
            
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
        const record = state.shrimpDataInventory.find(element => element.id == shrimpId);
        
        // Detracts from quantity
        if (record.quantity > quantity) {
            
            record.quantity -= quantity;
            
        }
        
        // Removes the item from the array if amount sold is the amount available
        else {
            
            state.shrimpDataInventory.splice(state.shrimpDataInventory.indexOf(record), 1);
            
        }
        
        // Updates funds when items are sold
        state.funds += shrimpPrice * quantity;
        
    },

    'SET_PORTFOLIO' (state, portfolio) {

        state.funds = portfolio.funds;
        state.shrimpData = portfolio.shrimpInventory ? portfolio.shrimpInventory : [];

    }
    
};

const actions = {
    
    sellShrimp({commit}, order) {
        
        commit('SELL_STOCK', order);
        
    }
    
};

const getters = {
    
    // Getter for available shrimp in Inventory
    shrimpInventoryGet (state, getters) {
        
        // Transfers data from Market to Inventory
        return state.shrimpDataInventory.map(shrimp => {
            
            // Gets the stored data from Market
            const record = getters.shrimpDataMarketGet.find(element => element.id == shrimp.id);
            
            return {
                
                id: shrimp.id,
                
                quantity: shrimp.quantity,
                
                name: record.name,
                
                price: record.price,

                photo: record.photo,

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