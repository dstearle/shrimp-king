<template>
    
    <div class="card-columns">
        
        <app-livestock v-for="shrimp in shrimps" :shrimp="shrimp"></app-livestock>
        
    </div>
    
</template>


<script>
    
    import Livestock from './Livestock.vue';

    export default {
        
        components: {
            
            appLivestock: Livestock
            
        },
        
        computed: {
            
            
            shrimps() {
                
                return this.$store.getters.shrimpDataMarketGet;
                
            }
            
        }
        
    }

</script>