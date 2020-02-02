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
                    class="text-light pl-1"
                    @mouseover="myIcon = ['fa', 'info-circle']" 
                    @mouseout="myIcon = ['fa', 'times-circle']"
                />
            
            </span>

        </h4>

    </div>
    
</template>

<script>

    export default {
        
        props: ['selectedTags', 'tag'],

        data() {

            return {

                myIcon: ['fa', 'times-circle'],

            }

        },

    }

</script>