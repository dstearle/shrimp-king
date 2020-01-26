<template>
    
    <div class="row py-3">

        <div class="col form-group">

            <!-- List Of Tags -->
            <span 
                class="d-inline-flex m-1 badge mr-1"
                v-for="tag in selectedTagsArray" 
                :tag="tag"
                v-bind:key="tag" 
            >

                {{ tag }}
            
            </span>

        </div>

    </div>
    
</template>

<script>

    export default {
        
        props: ['selectedTagsArray'],

    }

</script>