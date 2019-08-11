<template>
    
    <div class="card mb-3" :class="shrimp.border">
           
        <img :src="shrimp.photo" class="shrimp-photo card-img-top">

        <div class="card-body" :class="shrimp.text">

            <!-- Title -->
            <h5 class="card-title">{{ shrimp.name }}</h5>

            <div class="row py-2">

                <!-- Price -->
                <small class="col-6">(Price: {{ shrimp.price }} | Quantity: {{ shrimp.quantity }} )</small>

            </div>

            <div class="row">

                <div class="col-6">

                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model="quantity" 
                        :class="shrimp.text"
                    >

                </div>

                <div class="col-6">

                    <button 
                        class="btn"
                        :class="shrimp.button"
                        @click="sellStock" 
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
            
            ...mapActions({ placeSellOrder: 'sellStock' }),
            
            sellStock() {
                
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