<template>
    
    <div class="card mb-3" :class="shrimp.border" style="max-width: 300px; border-width: medium;">
           
        <!-- Shrimp Photo -->
        <img :src="shrimp.photo" class="shrimp-photo card-img-top">

        <!-- Favicons -->
        <div class="row top" style="margin: auto">

            <!-- Info Icon -->
            <div class="col-6 d-flex justify-content-start pl-2 pt-2">

                <img src="./../../assets/logo.png" class="" style="height: 25px; width: 25px;">

            </div>

            <!-- Star Icon -->
            <div class="col-6 d-flex justify-content-end pr-2 pt-2">

                <img src="./../../assets/logo.png" class="" style="height: 25px; width: 25px;">
                
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
                
                quantity: 0
                
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
                
            }
            
        }
        
    }

</script>

<style scoped>

    .card-img-top {
        height: 250px;
    }

    .top {

        position: absolute;
        top: 0;
        width: 100%;
    }

    .danger {
        
        border: 3px solid red;
        
    }

</style>