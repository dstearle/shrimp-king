<template>
    
    <div class="row">

        <!-- Save Button -->
        <div class="col-xs-12 col-md-4 saveLoadButton">

            <button type="button" class="btn btn-warning btn-lg btn-block text-white">
            
                <h3>
                    
                    <!-- Save Icon -->
                    <font-awesome-icon icon="save" class="pr-1"/>
                    
                    Save
                
                </h3>
                
            </button>

        </div>

        <!-- Load Button -->
        <div class="col-xs-12 col-md-4 saveLoadButton">

            <button type="button" class="btn btn-info btn-lg btn-block">
            
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
                fetchData: 'loadData'

            }),

            // Ends the current day
            endDay() {

                // Randomizes prices of shrimp
                this.randomizeStocks();

            },

            // Saves user's session
            saveData() {

                const data = {

                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks

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