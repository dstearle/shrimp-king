<template>
    
    <div class="container">
        
        <div class="row py-3">

            <div class="col">

                <!-- Links To Portfolio & Github -->
                <app-portfolio-card></app-portfolio-card>

                <!-- Welcome -->
                <div class="card text-white aboutCard">

                    <div class="card-body">

                        <h1 class="text-success">Welcome To Shrimp King!</h1>

                        <hr class="my-3">

                        <p>
                            Welcome to Shrimp King, an ecommerce website sim! 
                            In this simulator users can buy and sell fancy shrimp over a period of time. 
                            Starting with a set amount of funds the user can visit the "Market" page where various shrimps will be sold for varying prices. 
                            Each day the prices and available shrimp will randomly go up or down, so it is in the user's best interest to buy low then sell high to gain a profit. 
                            Every time a shrimp is purchased it is added to the user's inventory on the "Inventory" page where they will have the option to sell their available shrimps. 
                            Once the user has completed all transactions (sales/purchases) for that day they can then visit the "Dashboard" page where they can end the day, which will randomize both the prices and quantities for shrimp in the market. 
                            The "Dashboard" page will also have also has a save/load feature so that user's can save their current session and load it at a different time.
                        </p>

                    </div>

                </div>

                <!-- Page Descriptions -->
                <div class="card">

                    <div class="card-body">

                        <h1>What Are The Functions For Each Page?</h1>

                        <p>
                            The dashboard page is where the user can save their current progress, load a previously saved game or end they fiscal day. 
                            Ending the day will randomize the prices and available quantities for shrimp in the market. 
                            The prices for shrimp you purchased in your inventory will also match their current market prices.
                        </p>

                        <p>
                            The inventory page allows you to sell shrimp you have purchased. 
                            The quantity for each shrimp will only change as you buy or sell more shrimp. The prices for the shrimp will match the current day's market price. 
                            So make sure to sell when the market price is higher than what you originally purchased.
                        </p>

                        <p>
                            The market is where you may buy new or more shirmp. 
                            Each day will have new prices and quantities. 
                            If you buy all of the available quantity for a particular shrimp its card will disappear until you either sell any amount of that type of shrimp or by ending the day (Note: Some shrimp might not always be available).
                        </p>

                    </div>

                </div>

            </div>

        </div>
        
    </div>
    
</template>

<script>

    import PortfolioCard from "./PortfolioCard.vue"

    export default {

        components: {
        
            appPortfolioCard: PortfolioCard,
            
        },
        
    }

</script>

<style scoped>

    hr {              
        background-color: white;
        height: 0.5px;
    }

    .aboutCard {
        background: rgba(0,0,0,0.6);
    }

</style>