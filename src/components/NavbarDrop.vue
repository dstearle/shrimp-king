<template>
    
    <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark mb-3">
       
        <div class="container">
            
            <!-- Navbar Dropdown -->
            <ul class="dropdown mb-0 pl-0">

                <a class="dropdown-toggle" data-toggle="dropdown" href="">

                    <!-- Title -->
                    <strong class="navbar-text text-white">Shrimp King</strong>

                    <!-- Dropdown Caret -->
                    <span class="caret pl-1"></span>

                </a>

                <!-- Dropdown Items -->
                <ul class="dropdown-menu">

                    <!-- About -->
                    <router-link to="/" class="nav-item" activeClass="active" tag="li" exact>
                    
                        <a class="nav-link">About</a>
                        
                    </router-link>

                    <!-- Dashboard -->
                    <router-link to="/dashboard" class="nav-item" activeClass="active" tag="li">
                    
                        <a class="nav-link">Dashboard</a>
                        
                    </router-link>

                    <!-- Inventory -->
                    <router-link to="/inventory" class="nav-item" activeClass="active" tag="li">
                    
                        <a class="nav-link">Inventory</a>
                        
                    </router-link>

                    <!-- Market -->
                    <router-link to="/market" class="nav-item" activeClass="active" tag="li">
                    
                        <a class="nav-link">Market</a>
                        
                    </router-link>

                </ul>

            </ul>
                 
            <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
                    
                <ul class="nav navbar-nav">
                    
                    <!-- Current Funds -->
                    <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
                    
                </ul>
                    
            </div>
                
        </div>
        
    </nav>
    
</template>

<script>

    export default {

        computed: {
            
            funds() {
                
                return this.$store.getters.funds;
                
            }
            
        },
        
    }

</script>

<style scoped>

    .navbar-dark {
        background-color: #000000!important;
    }

    a.dropdown-toggle {color: white;}
    
    .dropdown-menu li>a {
        color:white;
    }
    .dropdown-menu {
        background:rgba(0,0,0,0.5); 
        color:white;
    }

</style>