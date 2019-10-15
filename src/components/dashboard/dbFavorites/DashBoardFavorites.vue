<template>
    
    <!-- Favorites List -->
    <div v-show="favoritesMarket.length > 0">

        <!-- Shrimp List -->
        <div class="col">
            
            <app-favorite-slots 
                v-for="shrimp in favoritesMarket"
                :shrimp="shrimp" 
                v-bind:key="shrimp.id" 
            ></app-favorite-slots>
            
        </div>

    </div>
    
</template>

<script>

    import {mapGetters} from 'vuex';
    import FavoriteSlots from './FavoriteSlots.vue';

    export default {

        components: {
            
            appFavoriteSlots: FavoriteSlots
            
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
            
        }
        
    }

</script>