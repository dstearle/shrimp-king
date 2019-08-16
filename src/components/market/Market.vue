<template>
    
    <div class="container">

        <!-- Shrimp Category Title -->
        <h1 class="text-white pb-3" v-if="shrimps.length > 0">Neocaridina</h1>

        <!-- Market Closed -->
        <h1 class="text-white pb-3" v-else>Market is Closed</h1>

        <!-- Shrimp List -->
        <div class="card-columns">
            
            <app-livestock v-for="shrimp in shrimps" :shrimp="shrimp" v-bind:key="shrimp.id"></app-livestock>
            
        </div>

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

<style>

    @media (min-width: 576px) {
        .card-columns {
            column-count: 1;
        }
    }
    @media (min-width: 768px) {
        .card-columns {
            column-count: 2;
        }
    }
    @media (min-width: 992px) {
        .card-columns {
            column-count: 3;
        }
    }
    @media (min-width: 1200px) {
        .card-columns {
            column-count: 3;
        }
    }

</style>