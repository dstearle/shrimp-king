<template>
    
    <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark mb-3">
       
        <div class="container-fluid">
            
            <!-- Title -->
            <span class="navbar-brand">
                
                <h3>Shrimp King</h3>
                
            </span>

             <!-- Page Navigation -->
            <ul class="navbar-nav">

                <!-- Dashboard -->
                <router-link to="/" class="nav-item" activeClass="active" tag="li">
                
                    <a class="nav-link">Dashboard</a>
                    
                </router-link>
                
                <!-- Livestock -->
                <router-link to="/livestock" class="nav-item" activeClass="active" tag="li">
                
                    <a class="nav-link">Livestock</a>
                    
                </router-link>
                
                <!-- Market -->
                <router-link to="/market" class="nav-item" activeClass="active" tag="li">
                
                    <a class="nav-link">Market</a>
                    
                </router-link>
                    
            </ul>
                 
            <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
                    
                <ul class="nav navbar-nav">
                    
                    <!-- Current Funds -->
                    <!-- <strong class="navbar-text">Funds: {{ funds | currency }}</strong> -->
                    
                </ul>
                    
            </div>
                
        </div>
        
    </nav>
    
</template>