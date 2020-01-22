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

    import SearchSelect from './SearchSelect.vue';
    import CurrentTags from './CurrentTags.vue';

    export default {

        components: {

            SearchSelect,
            CurrentTags

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

            }

        },

    }

</script>

<style scoped>

</style>