import About from './components/about/About.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import Inventory from './components/inventory/Inventory.vue';
import Market from './components/market/Market.vue';

export const routes = [
    
    { path: '/', component: About, name: "About" },

    { path: '/dashboard', component: Dashboard, name: "Dashboard" },

    { path: '/inventory', component: Inventory, name: "Inventory" },

    { path: '/market', component: Market, name: "Market" }
    
];