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

            // Retrieves all of the available unique tags
            mapTags() {

                // Array to hold available shrimp
                const arr = this.shrimpMarket;

                // Set to hold unique values for tags in form of JSON string
                const arr2 = new Set();

                const arr3 = [];
                
                // A forEach loop to iterate through each data object
                const loop = arr.forEach(element => {

                    // Another forEach loop to iterate through the tags held by each data object
                    const loop2 = element.tags.forEach(item => {

                        // Sets each unique value to a string to be stored
                        arr2.add(JSON.stringify(item))

                    })
                    
                });

                const finalloop = arr2.forEach(element => {

                    arr3.push(JSON.parse(element))
                    
                });
                
                console.log(arr3)
                
            }

        },

        mounted () {

            // Retrieves all of the available unique tags on load
            this.mapTags();

        },

    }

</script>

<style scoped>

</style>