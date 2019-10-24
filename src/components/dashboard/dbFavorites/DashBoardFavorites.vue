<template>

    <div class="row pt-2">

        <div class="col-md-12 col-lg-4">

            <div class="card" style="min-width: 280px; height: 590px;">

                <div class="card-body">

                    <h3>Current Favorites</h3>

                    <hr>

                    <!-- Favorites List -->
                    <div>

                        <!-- Shrimp List -->
                        <div class="col">
                            
                            <app-favorite-slots 
                                v-for="shrimp in favoritesMarket"
                                :shrimp="shrimp" 
                                v-bind:key="shrimp.name" 
                            ></app-favorite-slots>

                            <app-empty-slots
                                v-for="(item, index) in emptySlotsLength"
                                v-bind:key="index"
                            ></app-empty-slots>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
    
</template>

<script>

    import { mapGetters } from 'vuex';
    import FavoriteSlots from './FavoriteSlots.vue';
    import EmptySlots from './EmptySlots.vue';

    export default {

        components: {
            
            appFavoriteSlots: FavoriteSlots,

            appEmptySlots: EmptySlots
            
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

            // Figures out the amount of empty slots for the dashboard favorites list
            emptySlotsLength() {

                // If there are no favorited items fill the list with empty slots
                if(this.favoritesMarket.length == 0) {

                    return 6;

                }

                // Returns the number of empty slots if there are favorited items
                else { return 6 - this.favoritesMarket.length; }

            }
            
        }
        
    }

</script>