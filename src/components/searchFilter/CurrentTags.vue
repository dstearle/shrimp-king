<template>
    
    <div class="row py-3">

        <div class="col form-group">

            <!-- List Of Tags -->
            <span 
                class="d-inline-flex m-1 badge mr-1"
                :class="tag.color"
                v-for="tag in selectedTags" 
                :tag="tag.name"
                v-bind:key="tag.name" 
            >

                {{ tag.name }}
            
            </span>

        </div>

    </div>
    
</template>

<script>

    export default {
        
        props: ['selectedTags'],

    }

</script>