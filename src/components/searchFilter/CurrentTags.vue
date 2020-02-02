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

                <!-- Remove Tag Icon -->
                <font-awesome-icon 
                    icon="times-circle" 
                    class="text-light pl-1"
                    @mouseover="activeInfo = true"
                    @mouseleave="activeInfo = false"
                    :class="{ active: activeInfo , 'inActiveHover': !activeInfo }"
                />

            
            </span>

        </div>

    </div>
    
</template>

<script>

    export default {
        
        props: ['selectedTags'],

    }

</script>