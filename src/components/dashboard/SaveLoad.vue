<template>
    
    <div class="row">

        <!-- Save Button -->
        <div class="col-xs-12 col-md-4 saveLoadButton">

            <button @click="saveData" type="button" class="btn btn-warning btn-lg btn-block text-white">
            
                <h3>
                    
                    <!-- Save Icon -->
                    <font-awesome-icon icon="save" class="pr-1"/>
                    
                    Save
                
                </h3>
                
            </button>

        </div>

        <!-- Load Button -->
        <div class="col-xs-12 col-md-4 saveLoadButton">

            <button @click="loadData" type="button" class="btn btn-info btn-lg btn-block">
            
                <h3>
                    
                    <!-- Load Icon -->
                    <font-awesome-icon icon="book" class="pr-1"/>
                    
                    Load
                    
                </h3>
                
            </button>

        </div>

        <!-- End Day Button -->
        <div class="col-xs-12 col-md-4 saveLoadButton">

            <button type="button" class="btn btn-danger btn-lg btn-block" @click="endDay">
            
                <h3>
                    
                    <!-- End Day Icon -->
                    <font-awesome-icon icon="hourglass-end" class="pr-1"/>
                    
                    End Day
                    
                </h3>
                
            </button>

        </div>

    </div>

</template>

<script>

    import {mapActions} from 'vuex';

    export default {

        methods: {

            ...mapActions({

                randomizeStocks: 'randomizeStocks',
                dayChange: 'dayChange',
                fetchData: 'loadData'

            }),

            // Ends the current day
            endDay() {

                // Randomizes prices of shrimp
                this.randomizeStocks();
                // Updates the labels for the X axis
                this.dayChange();

            },

            // Saves user's session
            saveData() {

                // Stores the user's information to be saved.
                const data = {

                    // User's funds
                    funds: this.$store.getters.funds,
                    // User's inventory
                    shrimpInventoryData: this.$store.getters.shrimpInventoryDataGet,
                    // Market's inventory
                    shrimpMarketData: this.$store.getters.shrimpMarketDataGet,
                    // The X axis labels for the chart
                    weekDayArray: this.$store.getters.weekDayArrayGet,
                    // The current number of favorited items
                    favoritesCounter: this.$store.getters.favoritesCounterGet,

                };

                //Put request that overrides saved data with new save
                this.$http.put('data.json', data);

            },

            // Loads the last session saved
            loadData() {

                this.fetchData();

            }

        },
        
    }

</script>

<style scoped>

    @media (max-width: 575px) {
        .saveLoadButton {
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }
    @media (min-width: 576px) {
        .saveLoadButton {
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }

</style>