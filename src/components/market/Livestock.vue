<template>
    
    <div class="card mb-3" :class="shrimp.border" style="max-width: 300px; border-width: medium;">
           
        <!-- Shrimp Photo -->
        <img 
            :src="shrimp.photo" 
            class="shrimp-photo card-img-top"
        >

        <!-- Photo Overlay -->
        <div 
            class="card-img-overlay text-center" 
            :class="{ active: !activeInfo , 'photoHover': activeInfo }"
            style="height: 250px;"
        >

            <!-- Overlay Text -->
            <div class="text-white" style="opacity: 1; margin-top: 50%;">poop</div>

        </div>

        <!-- Card Icons -->
        <div class="row top" style="margin: auto">

            <!-- Info Icon -->
            <div class="col-6 d-flex justify-content-start pl-2 pt-2">

                <font-awesome-icon 
                    icon="info-circle" 
                    class="text-light"
                    @mouseover="activeInfo = true"
                    @mouseleave="activeInfo = false"
                    :class="{ active: activeInfo , 'inActiveHover': !activeInfo }"
                />

            </div>

            <!-- Star Icon -->
            <div class="col-6 d-flex justify-content-end pr-2 pt-2">

                <font-awesome-icon 
                    icon="star" 
                    class="text-light"
                    @mouseover="activeStar = true"
                    @mouseleave="activeStar = false"
                    :class="{ active: activeStar , 'inActiveHover': !activeStar }"
                />
                
            </div>

        </div>

        <div class="card-body" :class="shrimp.text">

            <!-- Title -->
            <h5 class="card-title">{{ shrimp.name }}</h5>

            <div class="row py-2">

                <!-- Quantity -->
                <small class="col-6"> Qnty: </small>

                <!-- Price -->
                <small class="col-6 text-center">Price: {{ shrimp.price | currency }} </small>

            </div>

            <div class="row">

                <div class="col-6">

                    <!-- Purchase Input -->
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model.number="quantity" 
                        :class="shrimp.text"
                    >

                </div>

                <div class="col-6">

                    <!-- Purchase Button -->
                    <button 
                        class="btn btn-block"
                        :class="shrimp.button"
                        @click="buyShrimp" 
                        :disabled="insufficientFunds || quantity <= 0"
                    >
                    
                        {{ insufficientFunds ? 'N/E Funds' : 'Purchase' }}
                        
                    </button>
                    
                </div>

            </div>

        </div>
        
    </div>
    
</template>

<script>

    export default {
        
        props: ['shrimp'],
        
        data() {
            
            return {
                
                quantity: 0,

                activeInfo: false,

                activeStar: false
                
            }
            
        },
        
        computed: {
            
            funds() {
                
                return this.$store.getters.funds;
                
            },
            
            // Marks insufficientFunds as true if purchase exceeds available funds
            insufficientFunds() {
                
                return this.quantity * this.shrimp.price > this.funds;
                
            }
            
        },
        
        methods: {
            
            buyShrimp() {
                
                const order = {
                    
                    shrimpId: this.shrimp.id,
                        
                    shrimpPrice: this.shrimp.price,
                        
                    quantity: this.quantity
                    
                };
                
                // Action from shrimpMarket.js
                this.$store.dispatch('buyShrimp', order);
                
                this.quantity = 0;
                
            },

            // Method for icon hover toggles
            mouseOver() {

                // Toggles info icon classes
                this.activeInfo = !this.activeInfo;
                // Toggles star classes
                this.activeStar = !this.activeStar;

            },
            
        }
        
    }

</script>

<style scoped>

    .card-img-top {
        height: 250px;
    }

    .activeHover {
        opacity: 1 !important;
    }
    .inActiveHover {
        opacity: 0.6;
    }
    .photoHover {
        background: #000000; 
        opacity: 0.6;
    }
    
    .top {

        position: absolute;
        top: 0;
        width: 100%;
    }

</style>