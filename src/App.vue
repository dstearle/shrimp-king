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
        
    },

    methods: {

      routeStyles () {

        // Applies background for the dashboard
        if (['/'].includes(this.$route.path)) document.body.className = 'bg-dashboard'

        // Applies background for inventory
        if (['/inventory'].includes(this.$route.path)) document.body.className = 'bg-inventory'

        // Applies background for market
        if (['/market'].includes(this.$route.path)) document.body.className = 'bg-market'

      }

    },

    mounted () {

      // Route styles when the app is initially loaded
      this.routeStyles()

    },

    watch: {
      
      // Changes style for pages when route changes
      '$route' () {this.routeStyles()},
      
    },
      
  }

</script>

<style>

  .bg-dashboard {background: white;}
  .bg-inventory {background: pink;}
  .bg-market {background: blue;}

</style>