<template>
    
    <div class="col pt-3">

        <!-- List Of Tags -->
        <app-tag-template 
            v-for="tag in selectedTags" 
            :tag="tag"
            v-bind:key="tag.name" 
        >
        </app-tag-template>

    </div>
    
</template>

<script>

    import TagTemplate from './TagTemplate.vue';

    export default {

        components: {
            
            appTagTemplate: TagTemplate
            
        },
        
        props: ['selectedTags'],

        data() {

            return {

                myIcon: ['fa', 'times-circle'],

            }

        },

    }

</script>