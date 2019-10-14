<template>
    
    <div class="row mb-3" :class="shrimp.text">
           
        <div class="mr-4">

            <!-- Shrimp Photo -->
            <img 
                :src="shrimp.photo" 
                class="shrimp-photo"
                :alt="shrimp.alt"
            >

        </div>

        <div class="">

            <div class="row m-0">

                <!-- Title -->
                <h6 class="align-self-center m-0"> {{ shrimp.name }} </h6>

            </div>

            <div class="row m-0">

                <!-- Title -->
                <p class="align-self-center m-0"> remove </p>

            </div>

        </div>
        
    </div>
    
</template>

<script>

    import {mapGetters, mapActions} from 'vuex';

    export default {
        
        props: ['shrimp'],
        
        computed: {

            ...mapGetters({
                
                // Retrieves the counter for favorited items
                favoritesCounterGet: 'favoritesCounterGet'
                
            }), 
            
        },
        
        methods: {

            ...mapActions({

                favUp: 'favUp',
                favDown: 'favDown'

            }),
            
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

                // Toggles the item from true to false (or vice versa)
                this.shrimp.favorited = !this.shrimp.favorited;
                
                // Check to see if item is favorited and adds to the counter
                if(this.shrimp.favorited) {this.favUp();}
                // Detracts from the counter if unfavorited
                else {this.favDown();}

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

    .shrimp-photo {
        height: 4rem;
        width: 4rem;
        border-radius: 9999px;
    }

</style>