<template>
    
    <div class="container">

        <!-- Available Categories -->
        <div v-if="shrimpInventory.length > 0">

            <!-- Favorites List -->
            <div class="mb-5" v-show="favoritesInventory.length > 0">

                <!-- Shrimp Category Title -->
                <h1 class="text-white pb-3">Favorites</h1>

                <!-- Shrimp List -->
                <div class="card-columns">
                    
                    <app-livestock 
                        v-for="shrimp in favoritesInventory" 
                        :shrimp="shrimp" 
                        v-bind:key="shrimp.id" 
                        v-show="shrimp.quantity > 0"
                    ></app-livestock>
                    
                </div>

                <hr>

            </div>

            <!-- Neocaridina List -->
            <div class="my-5" v-show="neocaridinaInventory.length > 0">

                <!-- Shrimp Category Title -->
                <h1 class="text-white pb-3">Neocaridina</h1>

                <!-- Shrimp List -->
                <div class="card-columns">
                    
                    <app-livestock 
                        v-for="shrimp in neocaridinaInventory" 
                        :shrimp="shrimp" 
                        v-bind:key="shrimp.id"
                        v-show="shrimp.quantity > 0"
                    ></app-livestock>
                    
                </div>

                <hr>

            </div>

            <!-- Caridina List -->
            <div class="my-5" v-show="caridinaInventory.length > 0">

                <!-- Shrimp Category Title -->
                <h1 class="text-white pb-3">Caridina</h1>

                <!-- Shrimp List -->
                <div class="card-columns">
                    
                    <app-livestock 
                        v-for="shrimp in caridinaInventory" 
                        :shrimp="shrimp" 
                        v-bind:key="shrimp.id" 
                        v-show="shrimp.quantity > 0"
                    ></app-livestock>
                    
                </div>

                <hr>

            </div>

        </div>

        <!-- No Inventory -->
        <div v-else>

            <h1 class="text-white pb-3">Inventory is Empty</h1>

            <hr>
            
        </div>

    </div>
    
</template>

<script>

    import {mapGetters} from 'vuex';
    import Livestock from './Livestock.vue'; 
    
    export default {

        components: {
            
            appLivestock: Livestock
            
        },
        
        computed: {
            
            ...mapGetters({
                
                // Retrieves the data for inventory from the store
                shrimpInventory: 'shrimpInventoryDataGet'
                
            }),

            // The list for favorited shrimps
            favoritesInventory() {
                
                // Array to hold available shrimp
                const arr = this.shrimpInventory;

                // Filters out shrimp that have not been favorited
                return arr.filter(shrimp => shrimp.favorited != false)
                
            },

            // The list for neocaridina shrimps
            neocaridinaInventory() {

                // Array to hold available shrimp
                const arr = this.shrimpInventory;

                // Filters out shrimp based off id
                const range = arr.filter(shrimp => shrimp.id < 7 );

                // Filters out shrimp that have been favorited
                return range.filter(shrimp => shrimp.favorited != true)
                
            },

            // The list for neocaridina shrimps
            caridinaInventory() {

                // Array to hold available shrimp
                const arr = this.shrimpInventory;

                // Filters out shrimp based off id
                const range = arr.filter(shrimp => shrimp.id > 6 );

                // Filters out shrimp that have been favorited
                return range.filter(shrimp => shrimp.favorited != true)
                
            },
            
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