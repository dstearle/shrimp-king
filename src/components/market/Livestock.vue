<template>
    
    <div class="">
        
        <div class="card text-white mb-3">
           
            <div class="card-header bg-success">
                
                {{ liveStock.name }}
                
                <small>(Price: {{ liveStock.price }})</small>
                
            </div>
            
            <div class="card-body">
               
                <div class="">
                    
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model="quantity" 
                        :class="{danger: insufficientFunds}"
                    >
                    
                </div>
                
                <div class="">
                    
                    <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0">
                    
                        {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
                        
                    </button>
                    
                </div>
                
            </div>
        </div>
        
    </div>
    
</template>

<script>

    export default {
        
        props: ['stock'],
        
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
                
                return this.quantity * this.stock.price > this.funds;
                
            }
            
        },
        
        methods: {
            
            buyStock() {
                
                const order = {
                    
                    stockId: this.stock.id,
                        
                    stockPrice: this.stock.price,
                        
                    quantity: this.quantity
                    
                };
                                
                this.$store.dispatch('buyStock', order);
                
                this.quantity = 0;
                
            }
            
        }
        
    }

</script>

<style scoped>

    .danger {
        
        border: 3px solid red;
        
    }

</style>