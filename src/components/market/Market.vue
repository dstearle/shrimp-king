<template>
    
    <div>
        
        <app-livestock v-for="stock in stocks" :stock="stock"></app-livestock>
        
    </div>
    
</template>


<script>
    
    import Livestock from './Livestock.vue';

    export default {
        
        components: {
            
            appLivestock: Livestock
            
        },
        
        computed: {
            
            
            stocks() {
                
                return this.$store.getters.stocks;
                
            }
            
        }
        
    }

</script>