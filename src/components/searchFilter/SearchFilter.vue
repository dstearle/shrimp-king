<template>
    
    <div class="row py-3">

        <div class="col form-group">

            <!-- Search Select Input -->
            <search-select 
                v-model="selectedTag" 
                :options="tags"
                :filter-function="applySearchFilter"
            ></search-select>

            <current-tags></current-tags>

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
                                
            }

        },

        data() {

            return {

                selectedTag: null,
                tags: [

                    "Neocaridina",
                    "Caridina",
                    "Common",
                    "Uncommon",
                    "Rare",
                    "Red",
                    "Yellow",
                    "Green",
                    "Blue",
                    "Brown",
                    "Black",
                    "Markings",
                    "Rili",
                    "Crystal",
                    "Tiger",

                ]

            }

        },

        methods: {

            // Filters the list with user input
            applySearchFilter(search, options) {

                return options.filter(option => {
                return option.toLowerCase().startsWith(search.toLowerCase())

                })

            },

        },

        mounted () {

            // Retrieves all of the available unique tags on load
            this.mapTags;
            console.log(this.mapTags)

        },

    }

</script>

<style scoped>

</style>