import Dashboard from './components/Dashboard.vue';
import Inventory from './components/inventory/Inventory';
import Market from './components/market/Market.vue';

export const routes = [
    
    { path: '/', component: Dashboard},

    { path: '/inventory', component: Inventory},

    { path: '/market', component: Market}
    
];