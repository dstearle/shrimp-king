<template>
    
    <div class="container">

        <!-- Favorites List -->
        <div class="mb-5" v-show="favoritesMarket.length > 0">

            <!-- Shrimp Category Title -->
            <h1 class="text-white pb-3">Favorites</h1>

            <!-- Shrimp List -->
            <div class="card-columns">
                
                <app-livestock 
                    v-for="shrimp in favoritesMarket" 
                    :shrimp="shrimp" 
                    v-bind:key="shrimp.id" 
                    v-show="shrimp.quantity > 0"
                ></app-livestock>
                
            </div>

            <hr>

        </div>

        <!-- Neocaridina List -->
        <div class="my-5" v-show="neocaridinaMarket.length > 0">

            <!-- Shrimp Category Title -->
            <h1 class="text-white pb-3">Neocaridina</h1>

            <!-- Shrimp List -->
            <div class="card-columns">
                
                <app-livestock 
                    v-for="shrimp in neocaridinaMarket" 
                    :shrimp="shrimp" 
                    v-bind:key="shrimp.id" 
                    v-show="shrimp.quantity > 0"
                ></app-livestock>
                
            </div>

            <hr>

        </div>

        <!-- Caridina List -->
        <div class="my-5" v-show="caridinaMarket.length > 0">

            <!-- Shrimp Category Title -->
            <h1 class="text-white pb-3">Caridina</h1>

            <!-- Shrimp List -->
            <div class="card-columns">
                
                <app-livestock 
                    v-for="shrimp in caridinaMarket" 
                    :shrimp="shrimp" 
                    v-bind:key="shrimp.id" 
                    v-show="shrimp.quantity > 0"
                ></app-livestock>
                
            </div>

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
                
                // Retrieves the data for market from the store
                shrimpMarket: 'shrimpMarketDataGet',
                // Retrieves the counter for favorited items
                favoritesCounterGet: 'favoritesCounterGet'
                
            }),

            // The filtered list for favorited shrimps
            favoritesMarket() {
                
                // Array to hold available shrimp
                const arr = this.shrimpMarket;

                // Filters out shrimp that have not been favorited
                return arr.filter(shrimp => shrimp.favorited != false)
                
            },
            
            // The filtered list for neocaridina shrimps
            neocaridinaMarket() {
                
                // Array to hold available shrimp
                const arr = this.shrimpMarket;

                // Filters out shrimp based off id
                const range = arr.filter(element => element.id < 7 );

                // Filters out shrimp that have been favorited
                return range.filter(shrimp => shrimp.favorited != true)
                
            },

            // The filtered list for ccaridina shrimps
            caridinaMarket() {
                
                // Array to hold available shrimp
                const arr = this.shrimpMarket;

                // Filters out shrimp based off id
                const range = arr.filter(element => element.id > 6 );

                // Filters out shrimp that have been favorited
                return range.filter(shrimp => shrimp.favorited != true)
                
            },
            
        }
        
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