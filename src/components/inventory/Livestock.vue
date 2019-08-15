<template>
    
    <div class="card" :class="shrimp.border" style="max-width: 300px; border-width: medium;">
           
        <!-- Shrimp Photo -->
        <img :src="shrimp.photo" class="shrimp-photo card-img-top">

        <div class="card-body" :class="shrimp.text">

            <!-- Title -->
            <h5 class="card-title">{{ shrimp.name }}</h5>

            <div class="row py-2">

                <!-- Quantity -->
                <small class="col-6"> Qnty: {{ shrimp.quantity }} </small>

                <!-- Price -->
                <small class="col-6 text-center">Price: {{ shrimp.price | currency }} </small>

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
                    
                        {{ insufficientQuantity ? 'N/E Stock' : 'Sell' }}
                        
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
            
            // Marks insufficientQuantity as true if quantity being sold is greater than available quantity
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
                    
                    quantity: this.shrimp.quantity
                    
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