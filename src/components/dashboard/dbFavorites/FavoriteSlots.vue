<template>
    
    <div class="row mb-3" :class="shrimp.text">

        <!-- Shrimp Photo --> 
        <div class="mr-4">

            <img 
                :src="shrimp.photo" 
                class="shrimp-photo"
                :alt="shrimp.alt"
            >

        </div>

        <div class="pointer">

            <!-- Title -->
            <div class="row m-0">

                <h6 class="align-self-center m-0">

                    <u>{{ shrimp.name }}</u>

                </h6>

            </div>

            <!-- Remove From Favorites -->
            <div 
                @click="favoriteItem"
                @mouseover="activeStar = true"
                @mouseleave="activeStar = false"
                class="row pt-1 m-0"
            >

                <!-- Star Icon -->
                <font-awesome-icon 
                    icon="star"
                    class="align-self-center m-0"
                    :class="{ 'text-secondary inActiveHover' : activeStar , 'text-warning': !activeStar }"
                />

                <!-- Remove Text -->
                <p class="align-self-center m-0 ml-1"> Remove </p>

            </div>

        </div>
        
    </div>
    
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';

    export default {
        
        props: ['shrimp'],

        data() {
            
            return {

                activeStar: false,
                
            }
            
        },
        
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

                // Toggles star classes
                this.activeStar = !this.activeStar;

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

    .pointer {cursor: pointer;}

</style>