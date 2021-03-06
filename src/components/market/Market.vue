<template>
    
    <div class="container">

        <!-- Search Filter -->
        <app-search-filter></app-search-filter>

        <!-- Filtered List -->
        <div class="mb-5" v-show="Array.from(this.selectedTags).length > 0">

            <!-- Shrimp Category Title -->
            <h1 class="text-white pb-3">Filtered</h1>

            <!-- Shrimp List -->
            <div 
                class="card-columns"
                v-if="filteredMarket.length > 0"
            >
                
                <app-livestock 
                    v-for="shrimp in filteredMarket" 
                    :shrimp="shrimp" 
                    v-bind:key="shrimp.id" 
                    v-show="shrimp.quantity > 0"
                ></app-livestock>
                
            </div>

            <!-- No Results -->
            <div v-else>
                
                <h6 class="text-white pb-3">Sorry, but no items match your search criteria!</h6>
                
            </div>

            <hr>

        </div>

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
        <div class="mt-5" v-show="caridinaMarket.length > 0">

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
    import SearchFilter from './../searchFilter/SearchFilter.vue';

    export default {
        
        components: {
            
            appLivestock: Livestock,

            appSearchFilter: SearchFilter
            
        },
        
        computed: {

            ...mapGetters({
                
                // Retrieves the data for market from the store
                shrimpMarket: 'shrimpMarketDataGet',
                // Retrieves the counter for favorited items
                favoritesCounterGet: 'favoritesCounterGet',
                // Retrieves the data of currently selected tags
                selectedTags: 'selectedTagsGet',
                // Current count for selected tags
                selectedTagsTracker: 'selectedTagsTrackerGet'
                
            }),

            // The filtered list based off of selected tags
            filteredMarket() {

                // Array to hold filtered items
                const filt = [];

                // The selected tags to be compared to
                const tags = [];

                // A forEach loop to grab all of the selected tag names
                this.selectedTags.forEach(function(obj){

                    tags.push(obj.name);

                })

                entry:

                // A for of loop that Iterates through each item in the array
                for (const shrimp of this.shrimpMarket) {
                    
                    // A for loop to iterate through an item's tags
                    for (let i = 0; i < tags.length; i++) {

                        // If item does not contain each tag ignore
                        if (!shrimp.tags.some((tag) => tag.name === tags[i]))
                        continue entry;

                    }

                    // Return each item that contains selected tags
                    filt.push(shrimp);

                }

                // The filtered list to be used
                // Note: the selectedTagsTracker is for keeping track of changes in selectedTags since sets do not work with Vue's reactivity
                return this.selectedTagsTracker && Array.from(filt);
                
            },

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