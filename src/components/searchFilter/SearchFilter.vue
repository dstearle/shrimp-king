<template>
    
    <div class="row py-3">

        <div class="col form-group">

            <!-- Search Select Input -->
            <search-select 
                v-model="selectedTag" 
                :options="mapTagNames"
                :filter-function="applySearchFilter"
                v-on:childToParent="onChildClick"
            ></search-select>

            <!-- Currently Selected Tags -->
            <current-tags
                class="row"
                :selectedTags="setListTracker"
            ></current-tags>

        </div>

    </div>
    
</template>

<script>

    import {mapGetters, mapMutations} from 'vuex';
    import SearchSelect from './searchSelect/SearchSelect.vue';
    import CurrentTags from './currentTags/CurrentTags.vue';

    export default {

        components: {

            SearchSelect,
            CurrentTags

        },

        computed: {

            ...mapGetters({
                
                // Retrieves the data for market from the store
                shrimpMarket: 'shrimpMarketDataGet',
                // Retrieves the data of currently selected tags
                selectedTags: 'selectedTagsGet',
                // Current count for selected tags
                selectedTagsTracker: 'selectedTagsTrackerGet'
                
            }),

            // Retrieves all of the available unique tags
            mapTags() {

                // Array to hold available shrimp
                const arr = this.shrimpMarket;

                // Set to hold unique values for tags in form of JSON string
                const arr2 = new Set();

                // The final array to store the unique data objects
                const arr3 = [];
                
                // A forEach loop to iterate through each data object
                arr.forEach(element => {

                    // Another forEach loop to iterate through the tags held by each data object
                    element.tags.forEach(item => {

                        // Sets each unique value to a string to be stored
                        arr2.add(JSON.stringify(item))

                    })
                    
                });

                // The last forEach loop used to parse all of the items in arr2 back into data objects
                arr2.forEach(element => {

                    // Pushes each parsed item to the final array
                    arr3.push(JSON.parse(element))

                });
                
                return arr3;
                                
            },

            // Retrieves all of the tag names to be used in the search list in alphabetical order
            // Note: It was just easier to make another computed method to extract the names to be used with the current code than to use mapTags
            mapTagNames() {

                // Array to hold all of the unique tags found by mapTags
                const arr = this.mapTags;

                // Array to hold all of the extracted names of the tags from mapTags
                const arr2 = arr.map( item => item.name )
                
                return arr2.sort();

            },

            // Allows selectedTags to be reactive
            setListTracker() {

                // Note: the selectedTagsTracker is for keeping track of changes in selectedTags since sets do not work with Vue's reactivity
                return this.selectedTagsTracker && Array.from(this.selectedTags);

            }

        },

        data() {

            return {

                selectedTag: null,

            }

        },

        methods: {

            ...mapMutations({
                
                addTag: 'ADD_TAG',

                bumpListTracker: 'TAG_LIST_TRACKER'
                
            }),

            // Filters the list with user input
            applySearchFilter(search, options) {

                return options.filter(option => {
                    
                    return option.toLowerCase().startsWith(search.toLowerCase())

                })

            },

            // Retrieves selected tags
            onChildClick (value) {

                // The available tags to be compared to
                const arr = this.mapTags;

                // A forEach loop used to iterate through every available tag
                arr.forEach(tag => {

                    // Checks to see which tag names match the selected vaule
                    if(tag.name.indexOf(value) > -1) {

                        // Adds the selected tag from child component to a set in the store
                        this.addTag(tag);

                        // Trigger Vue updates
                        this.bumpListTracker();

                    }

                });

            },

        },

    }

</script>

<style scoped>

</style>