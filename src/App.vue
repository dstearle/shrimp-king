<template>
   
  <div class="container">

    <div class="row">

      <!-- Navbar -->
      <app-navbar class="visibility1"></app-navbar>

      <!-- Navbar Dropdown -->
      <app-navbar-drop class="visibility2"></app-navbar-drop>

      <!-- Router Area -->
      <div class="m-3 mt-5 pt-5">
            
        <router-view></router-view>
            
      </div>

    </div>
                  
  </div>
    
</template>

<script>
    
  import Navbar from "./components/Navbar.vue";
  import NavbarDrop from "./components/NavbarDrop.vue";

  export default {
      
    components: {
        
      appNavbar: Navbar,

      appNavbarDrop: NavbarDrop
        
    },
      
    created() {
        
      this.$store.dispatch('initStocks')
        
    },

    data() {

      return {

        navMobile: false,
        
      }

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
  
  .bg-inventory {
    background: url("./assets/images/inventoryBg.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .bg-inventory:before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(77, 77, 77, 0.6);
  }

  .bg-market {
    background: url("./assets/images/marketBg.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .bg-market:before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(77, 77, 77, 0.6);
  }

  .visibility1 { visibility: hidden;}
  .visibility2 { visibility: hidden;}

  @media (max-width: 576px) {
    .visibility1 { visibility: hidden;}
    .visibility2 { visibility: visible;}
  }
  @media (min-width: 576px) {
    .visibility1 { visibility: hidden;}
    .visibility2 { visibility: visible;}
  }
  @media (min-width: 768px) {
    .visibility1 { visibility: visible;}
    .visibility2 { visibility: hidden;}
  }
  @media (min-width: 992px) {
    .visibility1 { visibility: visible;}
    .visibility2 { visibility: hidden;}
  }
  @media (min-width: 1200px) {
    .visibility1 { visibility: visible;}
    .visibility2 { visibility: hidden;}
  }

</style>