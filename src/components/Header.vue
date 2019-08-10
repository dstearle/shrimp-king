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
                <router-link to="/portfolio" class="nav-item" activeClass="active" tag="li">
                
                    <a class="nav-link">Livestock</a>
                    
                </router-link>
                
                <!-- Market -->
                <router-link to="/stocks" class="nav-item" activeClass="active" tag="li">
                
                    <a class="nav-link">Market</a>
                    
                </router-link>
                    
            </ul>   
            
            <!-- Collapsable Navbar Button -->
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
               
                <span class="navbar-toggler-icon"></span>
                
            </button>
                 
            <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
                    
                <ul class="nav navbar-nav">
                    
                    <!-- End Day -->
                    <li class="nav-item"><a href="#" class="nav-link" @click="endDay">End Day</a></li>

                    <!-- Save/Load -->
                    <li class="nav-item b-dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">

                        <a 
                            href="#"
                            class="nav-link b-dropdown-toggle"
                            data-toggle="dropdown"
                            >Save & Load
                        </a>
                                
                        <!-- <div class="b-dropdown-menu">
                                
                            <a href="#" class="b-dropdown-item" @click="saveData">Save Data</a>
                                
                            <a href="#" class="b-dropdown-item" @click="loadData">Load Data</a>
                                
                        </div> -->
                            
                    </li>
                    
                    <!-- Current Funds -->
                    <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
                    
                </ul>
                    
            </div>
                
        </div>
        
    </nav>
    
</template>