<template>
    
    <div class="card mb-3" :class="shrimp.border" style="max-width: 300px">
           
        <!-- Shrimp Photo -->
        <img :src="shrimp.photo" class="shrimp-photo card-img-top">

        <div class="card-body" :class="shrimp.text">

            <!-- Title -->
            <h5 class="card-title">{{ shrimp.name }}</h5>

            <div class="row py-2">

                <!-- Price -->
                <small class="col-6">Price: {{ shrimp.price }}</small>

            </div>

            <div class="row">

                <div class="col-6">

                    <!-- Buy Amount Input -->
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model="quantity" 
                        :class="shrimp.text"
                    >

                </div>

                <div class="col-6">

                    <!-- Buy Button -->
                    <button 
                        class="btn btn-block"
                        :class="shrimp.button"
                        @click="buyShrimp" 
                        :disabled="insufficientFunds || quantity <= 0"
                    >
                    
                        {{ insufficientFunds ? 'Insufficient Funds' : 'Purchase' }}
                        
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

    .danger {
        
        border: 3px solid red;
        
    }

</style>