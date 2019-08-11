const state = {
    
    funds: 1000,
    shrimpData: []
    
};

const mutations = {
    
    'BUY_STOCK'(state, {shrimpId, quantity, shrimpPrice}) {
        
        const record = state.shrimpData.find(element => element.id == shrimpId);
        
        if (record) {
            
            record.quantity += quantity;
            
        }
        
        else { state.shrimpData.push({
            
            id: shrimpId,
            
            quantity: quantity
            
            });
        }
        
        state.funds -= shrimpPrice * quantity;
        
    },
    
    'SELL_STOCK' (state, {shrimpId, quantity, shrimpPrice}) {
        
        const record = state.shrimpData.find(element => element.id == shrimpId);
        
        if (record.quantity > quantity) {
            
            record.quantity -= quantity;
            
        }
        
        else {
            
            state.shrimpData.splice(state.shrimpData.indexOf(record), 1);
            
        }
        
        state.funds += shrimpPrice * quantity;
        
    },

    'SET_PORTFOLIO' (state, portfolio) {

        state.funds = portfolio.funds;
        state.shrimpData = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];

    }
    
};

const actions = {
    
    sellStock({commit}, order) {
        
        commit('SELL_STOCK', order);
        
    }
    
};

const getters = {
    
    stockPortfolio (state, getters) {
        
        return state.shrimpData.map(shrimp => {
            
            const record = getters.shrimpData.find(element => element.id == shrimp.id);
            
            return {
                
                id: shrimp.id,
                
                quantity: shrimp.quantity,
                
                name: record.name,
                
                price: record.price
                
            }
            
        });
        
    },
    
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