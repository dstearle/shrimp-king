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
                    icon="times-circle" 
                    class="text-light pl-1"
                    @mouseover="activeInfo = true"
                    @mouseleave="activeInfo = false"
                    :class="{ active: activeInfo , 'inActiveHover': !activeInfo }"
                />

            
            </span>

        </h4>

    </div>
    
</template>

<script>

    export default {
        
        props: ['selectedTags'],

    }

</script>