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
                const oop = [];

                const loop = arr.forEach(element => {

                    console.log(element.tags)
                    
                });
                console.log(oop)
                
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