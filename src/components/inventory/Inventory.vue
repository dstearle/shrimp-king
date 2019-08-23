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

        <hr>

    </div>
    
</template>

<script>

    import {mapGetters} from 'vuex';
    import Livestock from './Livestock.vue'; 
    
    export default {
        
        computed: {
            
            ...mapGetters({
                
                shrimpInventory: 'shrimpInventoryDataGet'
                
            })
            
        },
        
        components: {
            
            appLivestock: Livestock
            
        },
        
    }

</script>

<style>

    hr {              
        background-color: white;
        height: 0.5px;
    }

    @media (min-width: 576px) {
        .card-columns {
            column-count: 1;
        }
    }
    @media (min-width: 768px) {
        .card-columns {
            column-count: 2;
        }
    }
    @media (min-width: 992px) {
        .card-columns {
            column-count: 3;
        }
    }
    @media (min-width: 1200px) {
        .card-columns {
            column-count: 3;
        }
    }

</style>