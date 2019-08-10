<template>
   
  <div class="container">

    <!-- Navbar -->
    <app-navbar></app-navbar>
    
    <br><br><br>

    <!-- Router Area -->
    <div class="row pt-5">
          
      <div class="">
            
        <transition name="slide" mode="out-in">

          <router-view></router-view>

        </transition>  
            
      </div>
          
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