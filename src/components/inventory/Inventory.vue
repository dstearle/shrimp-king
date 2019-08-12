<template>
    
    <div class="card-columns">

        <app-livestock v-for="shrimp in shrimpInventory" :shrimp="shrimp"></app-livestock>
        
    </div>
    
</template>

<script>

    import {mapGetters} from 'vuex';
    import Livestock from './Livestock.vue'; 
    
    export default {
        
        computed: {
            
            ...mapGetters({
                
                shrimpInventory: 'shrimpInventory'
                
            })
            
        },
        
        components: {
            
            appLivestock: Livestock
            
        }
        
    }

</script>