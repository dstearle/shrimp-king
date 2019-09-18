<template>
    
    <div class="container">

        <!-- Favorites List -->
        <div class="mb-5" v-show="favoritesList.length > 0">

            <!-- Shrimp Category Title -->
            <h1 class="text-white pb-3">Favorites</h1>

            <!-- Shrimp List -->
            <div class="card-columns">
                
                <app-livestock 
                    v-for="shrimp in favoritesList" 
                    :shrimp="shrimp" 
                    v-bind:key="shrimp.id" 
                    v-show="shrimp.quantity > 0"
                ></app-livestock>
                
            </div>

            <hr>

        </div>

        <!-- Neocaridina List -->
        <div class="my-5" v-show="neocaridinaList.length > 0">

            <!-- Shrimp Category Title -->
            <h1 class="text-white pb-3">Neocaridina</h1>

            <!-- Shrimp List -->
            <div class="card-columns">
                
                <app-livestock 
                    v-for="shrimp in neocaridinaList" 
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
    
    import Livestock from './Livestock.vue';

    export default {
        
        components: {
            
            appLivestock: Livestock
            
        },
        
        computed: {

            // The list for favorited shrimps
            favoritesList() {
                
                const arr = this.$store.getters.shrimpMarketDataGet;

                return arr.filter(shrimp => shrimp.favorited != false)
                
            },
            
            // The list for neocaridina shrimps
            neocaridinaList() {
                
                const arr = this.$store.getters.shrimpMarketDataGet;

                return arr.filter(shrimp => shrimp.favorited != true)
                
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