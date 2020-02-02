<template>
    
    <div class="row py-3">

        <h4 class="col form-group">

            <!-- List Of Tags -->
            <span 
                class="d-inline-flex m-1 badge mr-1"
                :class="tag.color"
                v-for="tag in selectedTags" 
                :tag="tag.name"
                v-bind:key="tag.name" 
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
        
        props: ['selectedTags'],

        data() {

            return {

                myIcon: ['fa', 'times-circle'],

            }

        },

    }

</script>