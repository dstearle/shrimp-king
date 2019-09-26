import About from './components/about/About.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import Inventory from './components/inventory/Inventory.vue';
import Market from './components/market/Market.vue';

export const routes = [
    
    { path: '/', component: About },

    { path: '/dashboard', component: Dashboard },

    { path: '/inventory', component: Inventory },

    { path: '/market', component: Market }
    
];