<template>
    
    <div>

        <!-- Determines Size For Badge -->
        <h4>

            <!-- Badge -->
            <span 
                class="d-inline-flex badge mr-2"
                :class="tag.color" 
            >
                
                {{ tag.name }}

                <!-- Remove Tag Icon -->
                <font-awesome-icon 
                    :icon="myIcon" 
                    class="text-light ml-1 pl-1"
                    @mouseover="myIcon = ['fa', 'times-circle']" 
                    @mouseout="myIcon = ['fa', 'times']"
                    @click="removeTag(tag)"
                />
            
            </span>

        </h4>

    </div>
    
</template>

<script>

    import { mapMutations } from 'vuex';

    export default {
        
        props: ['selectedTags', 'tag'],

        data() {

            return {

                myIcon: ['fa', 'times']

            }

        },

        methods: {

            ...mapMutations({
                
                deleteTag: 'DELETE_TAG',

                bumpListTracker: 'TAG_LIST_TRACKER'
                
            }),

            // Method for removing a tag
            removeTag(tag) {

                // Deletes the selected tag from the set in the store
                this.deleteTag(tag);

                // Trigger Vue updates
                this.bumpListTracker();

            },

        },

    }

</script>