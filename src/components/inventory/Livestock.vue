<template>
    
    <div class="card mb-3" :class="shrimp.border" style="max-width: 300px">
           
        <!-- Shrimp Photo -->
        <img :src="shrimp.photo" class="shrimp-photo card-img-top">

        <div class="card-body" :class="shrimp.text">

            <!-- Title -->
            <h5 class="card-title">{{ shrimp.name }}</h5>

            <div class="row py-2">

                <!-- Price / Quantity -->
                <small class="col-6">Price: {{ shrimp.price }} | Qnty: {{ shrimp.quantity }} </small>

            </div>

            <div class="row">

                <div class="col-6">

                    <!-- Sell Amount Input -->
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model="quantity" 
                        :class="shrimp.text"
                    >

                </div>

                <div class="col-6">

                    <!-- Sell Button -->
                    <button 
                        class="btn btn-block"
                        :class="shrimp.button"
                        @click="sellShrimp" 
                        :disabled="insufficientQuantity || quantity <= 0"
                    >
                    
                        {{ insufficientQuantity ? 'Not Enough Livestock' : 'Sell' }}
                        
                    </button>
                    
                </div>

            </div>

        </div>
        
    </div>
    
</template>

<script>
    
    import { mapActions } from 'vuex';

    export default {
        
        props: ['shrimp'],
        
        data() {
            
            return {
                
                quantity: 0
                
            }
            
        },
        
        computed: {
            
            insufficientQuantity() {
                
                return this.quantity > this.shrimp.quantity;
                
            }
            
        },
        
        methods: {
            
            ...mapActions({ placeSellOrder: 'sellShrimp' }),
            
            // Method for selling shrimp
            sellShrimp() {
                
                const order = {
                    
                    shrimpId: this.shrimp.id,
                    
                    shrimpPrice: this.shrimp.price,
                    
                    quantity: this.quantity
                    
                };
                
                this.placeSellOrder(order);
        
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