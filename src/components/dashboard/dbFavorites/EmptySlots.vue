<template>
    
    <div class="row mb-3 text-secondary">

        <!-- Empty Photo --> 
        <div class="mr-4 empty-photo">


        </div>

        <div>

            <!-- Title -->
            <div class="row m-0">

                <h6 class="align-self-center m-0">

                    <u>Empty Slot</u>

                </h6>

            </div>

            <!-- Remove From Favorites -->
            <div 
                @click="isFavModalVisible"
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

                <!-- Remove Text -->
                <p class="align-self-center m-0 ml-1"> Add </p>

            </div>

        </div>
        
    </div>
    
</template>

<script>

    import {mapGetters, mapActions} from 'vuex';

    export default {
        
        props: ['shrimp'],

        data() {
            
            return {

                activeStar: false,
                // Determines if the modal for picking new items for the favorites list is visible
                isFavModalVisible: false,
                
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

            // Shows the modal for picking new items for the favorites list
            showFavModal() {

                this.isFavModalVisible = true;

            },

            // Closes the modal for picking new items for the favorites list
            closeFavModal() {

                this.isFavModalVisible = false;

            }
            
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

</style>