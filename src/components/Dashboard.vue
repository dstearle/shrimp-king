<template>
    
    <div class="container">
        
        <div class="row">

            <div class="col-9">

                <div class="card">

                    <div class="card-body">

                        <h1>Shrimp King Dashboard</h1>
            
                        <h6>You may Save & Load your Data</h6>
                        
                        <h6>Click on 'End Day' to begin a New Day!</h6>

                    </div>

                </div>

            </div>

            <div class="col-3">

                <button type="button" class="btn btn-danger btn-lg btn-block m-1" @click="endDay">
                    
                    <h2>End Day</h2>
                    
                </button>

                <button type="button" class="btn btn-warning btn-lg btn-block m-1 text-white">
                    
                    <h2>Save</h2>
                    
                </button>

                <button type="button" class="btn btn-info btn-lg btn-block m-1">
                    
                    <h2>Load</h2>
                    
                </button>

            </div>

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