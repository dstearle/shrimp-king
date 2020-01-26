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
                :selectedTagsArray="selectedTagsArray"
            ></current-tags>

        </div>

    </div>
    
</template>

<script>

    import {mapGetters} from 'vuex';
    import SearchSelect from './SearchSelect.vue';
    import CurrentTags from './CurrentTags.vue';

    export default {

        components: {

            SearchSelect,
            CurrentTags

        },

        computed: {

            ...mapGetters({
                
                // Retrieves the data for market from the store
                shrimpMarket: 'shrimpMarketDataGet',
                
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

            // Retrieves all of the tag names to be used in the search list
            // Note: It was just easier to make another computed method to extract the names to be used with the current code than to use mapTags
            mapTagNames() {

                // Array to hold all of the unique tags found by mapTags
                const arr = this.mapTags;

                // Array to hold all of the extracted names of the tags from mapTags
                const arr2 = arr.map( item => item.name )

                return arr2

            }

        },

        data() {

            return {

                selectedTag: null,
                selectedTagsArray: []

            }

        },

        methods: {

            // Filters the list with user input
            applySearchFilter(search, options) {

                return options.filter(option => {
                    
                    return option.toLowerCase().startsWith(search.toLowerCase())

                })

            },

            // Retrieves selected tags
            onChildClick (value) {

                // Checks to make sure the value has not been added to the array yet
                if(!this.selectedTagsArray.includes(value)) {

                    // Pushes the selected tag from child component to an array
                    this.selectedTagsArray.push(value)
                    console.log(this.selectedTagsArray)

                }

            },

        },

    }

</script>

<style scoped>

</style>