<template>
    
    <div class="card mb-3" :class="shrimp.border" style="max-width: 300px; border-width: medium;">
           
        <!-- Shrimp Photo -->
        <img 
            :src="shrimp.photo" 
            class="shrimp-photo card-img-top"
            :alt="shrimp.alt"
        >

        <!-- Photo Overlay -->
        <div 
            class="card-img-overlay text-center" 
            :class="{ active: !activeInfo , 'photoHover': activeInfo || activeTags || activeStar }"
            style="height: 250px;"
        >

            <!-- Info Overlay Text -->
            <div 
                class="text-white" 
                style="margin-top: 30%;"
                v-show="activeInfo"
            >

                {{ shrimp.overlayText }}

            </div>

            <!-- Tags Overlay Text -->
            <div 
                class="text-white" 
                style="margin-top: 30%;"
                v-show="activeTags"
            >

                <!-- List Of Tags -->
                <span 
                    class="d-inline-flex m-1 badge mr-1"
                    :class="tag.color"
                    v-for="tag in shrimp.tags" 
                    :tag="tag"
                    v-bind:key="tag.name" 
                >
                    {{ tag.name }}
                
                </span>

            </div>

            <!-- Star Overlay Text -->
            <!-- Add to Favorites -->
            <div 
                class="text-white" 
                style="margin-top: 30%;"
                v-show="activeStar && !shrimp.favorited"
            >

                {{ 'Click to add to favorites' }}

            </div>

            <!-- Star Overlay Text -->
            <!-- Remove From Favorites -->
            <div 
                class="text-white" 
                style="margin-top: 30%;"
                v-show="activeStar && shrimp.favorited"
            >

                {{ 'Click to remove from favorites' }}

            </div>

        </div>

        <!-- Card Icons -->
        <div class="row top" style="margin: auto">

            <!-- Info & Tags Icons -->
            <div class="col-6 d-flex justify-content-start pl-2 pt-2">

                <!-- Info -->
                <font-awesome-icon 
                    icon="info-circle" 
                    class="text-light"
                    @mouseover="activeInfo = true"
                    @mouseleave="activeInfo = false"
                    :class="{ active: activeInfo , 'inActiveHover': !activeInfo }"
                />

                <!-- Tags -->
                <font-awesome-icon 
                    icon="tags" 
                    class="text-light ml-2"
                    @mouseover="activeTags = true"
                    @mouseleave="activeTags = false"
                    :class="{ active: activeTags , 'inActiveHover': !activeTags }"
                />

            </div>

            <!-- Star Icon -->
            <div class="col-6 d-flex justify-content-end pr-2 pt-2">

                <!-- Add to Favorites -->
                <font-awesome-icon 
                    icon="star"
                    @click="favoriteItem"
                    @mouseover="activeStar = true"
                    @mouseleave="activeStar = false"
                    :class="{ 'text-warning' : activeStar , 'text-light inActiveHover': !activeStar }"
                    v-show="!shrimp.favorited"
                />

                <!-- Remove From Favorites -->
                <font-awesome-icon 
                    icon="star"
                    @click="favoriteItem"
                    @mouseover="activeStar = true"
                    @mouseleave="activeStar = false"
                    :class="{ 'text-light inActiveHover' : activeStar , 'text-warning': !activeStar }"
                    v-show="shrimp.favorited"
                />
                
            </div>

        </div>

        <div class="card-body" :class="shrimp.text">

            <!-- Title -->
            <h5 class="card-title"> {{ shrimp.name }} </h5>

            <div class="row py-2">

                <!-- Quantity -->
                <small class="col-6"> Qnty: {{ shrimp.quantity }}</small>

                <!-- Price -->
                <small class="col-6 text-center"> Price: {{ shrimp.price | currency }} </small>

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
                        :disabled="insufficientFunds ||  insufficientQuantity || quantity <= 0 "
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

                activeStar: false,

                activeTags: false
                
            }
            
        },
        
        computed: {
            
            funds() {
                
                return this.$store.getters.funds;
                
            },
            
            // Marks insufficientFunds as true if purchase exceeds available funds
            insufficientFunds() {
                
                return this.quantity * this.shrimp.price > this.funds;
                
            },

            // Marks insufficientQuantity as true if quantity being sold is greater than available quantity
            insufficientQuantity() {
                
                return this.quantity > this.shrimp.quantity;
                
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
                
                // Sets input for quantity back to zero after purchase
                this.quantity = 0;
                
            },

            // Method for favoriting an item
            favoriteItem() {

                this.shrimp.favorited = !this.shrimp.favorited;

            },

            // Method for icon hover toggles
            mouseOver() {

                // Toggles info icon classes
                this.activeInfo = !this.activeInfo;
                // Toggles star classes
                this.activeStar = !this.activeStar;
                // Toggles tags classes
                this.activeTags = !this.activeTags;

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
        background: rgba(0,0,0,0.7); 
    }
    
    .top {

        position: absolute;
        top: 0;
        width: 100%;
    }

</style>