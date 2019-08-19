<template>
    
    <div class="row">

        <!-- Save Button -->
        <div class="col-4">

            <button type="button" class="btn btn-warning btn-lg btn-block text-white">
            
                <h3>Save</h3>
                
            </button>

        </div>

        <!-- Load Button -->
        <div class="col-4">

            <button type="button" class="btn btn-info btn-lg btn-block">
            
                <h3>Load</h3>
                
            </button>

        </div>

        <!-- End Day Button -->
        <div class="col-4">

            <button type="button" class="btn btn-danger btn-lg btn-block" @click="endDay">
            
                <h3>End Day</h3>
                
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