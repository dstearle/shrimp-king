<template>
    
    <div class="container">

        <!-- Shrimp Category Title -->
        <h1 class="text-white pb-3" v-if="shrimpInventory.length > 0">Neocaridina</h1>

        <!-- No Inventory -->
        <h1 class="text-white pb-3" v-else>Inventory is Empty</h1>

        <!-- Shrimp List -->
        <div class="card-columns">

            <app-livestock v-for="shrimp in shrimpInventory" :shrimp="shrimp" v-bind:key="shrimp.id"></app-livestock>
            
        </div>

    </div>
    
</template>

<script>

    import {mapGetters} from 'vuex';
    import Livestock from './Livestock.vue'; 
    
    export default {
        
        computed: {
            
            ...mapGetters({
                
                shrimpInventory: 'shrimpInventoryGet'
                
            })
            
        },
        
        components: {
            
            appLivestock: Livestock
            
        },

        method: {

            isShown() {}
        }
        
    }

</script>