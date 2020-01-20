<template>
    
    <div class="row py-3">

        <div class="col form-group">

            <!-- Search Select Input -->
            <search-select 
                v-model="selectedTag" 
                :options="tags"
                :filter-function="applySearchFilter"
            ></search-select>

        </div>

    </div>
    
</template>

<script>

    import SearchSelect from './SearchSelect.vue'

    export default {

        components: {

            SearchSelect

        },

        data() {

            return {

                selectedTag: null,
                tags: [

                    "Apatosaurus",
                    "Suchomimus",
                    "Dryosaurus",
                    "Kentrosaurus",
                    "Velociraptor",
                    "Pachyrhinosaurus",
                    "Brachiosaurus",
                    "Iguanodon",
                    "T-Rex",
                    "Proceratosaurus",
                    "Dracorex",
                    "Carnotaurus",
                    "Mamenchisaurus"

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