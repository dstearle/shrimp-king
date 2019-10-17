<template>
    
    <div class="container">

        <!-- Save & Load Buttons -->
        <app-save-load></app-save-load>
        
        <!-- Dashboard Chart -->
        <div class="row py-3">

            <div class="col">

                <div class="card">

                    <div class="card-body px-5 pb-5">

                        <!-- <app-bi-weekly-chart></app-bi-weekly-chart> -->

                        <app-current-week-chart></app-current-week-chart>

                    </div>

                </div>

            </div>

        </div>

        <!-- Dashboard Favorites -->
        <div class="row py-3">

            <div class="col-md-12 col-lg-4">

                <div class="card">

                    <div class="card-body">

                        <h3>Current Favorites</h3>

                        <hr>

                        <app-dashboard-favorites></app-dashboard-favorites>

                    </div>

                </div>

            </div>

        </div>
        
    </div>
    
</template>

<script>

    import SaveLoad from "./SaveLoad.vue"

    import BiWeeklyChart from "./dbCharts/BiWeeklyChart.vue"
    import CurrentWeekChart from "./dbCharts/CurrentWeekChart.vue"

    import DashboardFavorites from "./dbFavorites/DashBoardFavorites.vue"

    export default {

        components: {
            
            appSaveLoad: SaveLoad,
            appBiWeeklyChart: BiWeeklyChart,
            appCurrentWeekChart: CurrentWeekChart,
            appDashboardFavorites: DashboardFavorites,
            
        },
        
    }

</script>