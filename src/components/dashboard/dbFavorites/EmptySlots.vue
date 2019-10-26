<template>
    
    <div class="row mb-3 text-secondary">

        <!-- Empty Photo --> 
        <div class="mr-4 empty-photo"></div>

        <div class="pointer">

            <!-- Title -->
            <div class="row m-0">

                <h6 class="align-self-center m-0">

                    <u>Empty Slot</u>

                </h6>

            </div>

            <!-- Select From Favorites (Opens Modal) -->
            <div 
                @click="favModalToggle"
                @mouseover="activeStar = true"
                @mouseleave="activeStar = false"
                class="row pt-1 m-0"
            >

                <!-- Star Icon -->
                <font-awesome-icon 
                    icon="star"
                    class="align-self-center m-0"
                    :class="{ 'text-secondary inActiveHover' : !activeStar , 'text-warning': activeStar }"
                />

                <!-- Add Text -->
                <p class="align-self-center m-0 ml-1"> Add </p>

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

                // Actions for bumping up/down the favorites counter
                favUp: 'favUp',
                favDown: 'favDown',
                // Toggles the boolean for the dashboard favorites modal
                favModalToggle: 'favModalToggle'

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

    .empty-photo {
        background: lightgray;
        height: 4rem;
        width: 4rem;
        border-radius: 9999px;
    }

    .pointer {cursor: pointer;}

</style>