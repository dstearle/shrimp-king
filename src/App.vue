<template>
   
  <div class="container">

    <!-- Navbar -->
    <app-navbar></app-navbar>
    
    <br><br><br>

    <!-- Router Area -->
    <div class="row pt-5">
          
      <router-view></router-view>
          
    </div>
                  
  </div>
    
</template>

<script>
    
    import Navbar from "./components/Navbar.vue";

    export default {
        
        components: {
            
            appNavbar: Navbar
            
        },
        
        created() {
            
            this.$store.dispatch('initStocks')
            
        }

    }
    
</script>