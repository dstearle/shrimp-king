<template>
    
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
       
        <div class="container-fluid">
           
            <router-link to="/" class="navbar-brand">Shrimp King</router-link>
                
            <ul class="navbar-nav">
                    
                <router-link to="/portfolio" class="nav-item" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
                    
                <router-link to="/stocks" class="nav-item" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>
                    
            </ul>   
            
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
               
                <span class="navbar-toggler-icon"></span>
                
            </button>
                 
            <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
                    
                <ul class="nav navbar-nav">
                    
                    <li class="nav-item"><a href="#" class="nav-link" @click="endDay">End Day</a></li>

                    <li class="nav-item b-dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
                            
                        <a 
                            href="#"
                            class="nav-link b-dropdown-toggle"
                            data-toggle="dropdown"
                            >Save & Load</a>
                                
                        <div class="b-dropdown-menu">
                                
                            <a href="#" class="b-dropdown-item" @click="saveData">Save Data</a>
                                
                            <a href="#" class="b-dropdown-item" @click="loadData">Load Data</a>
                                
                        </div>
                            
                    </li>
                    
                    <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
                    
                </ul>
                    
            </div>
                
        </div>
        
    </nav>
    
</template>