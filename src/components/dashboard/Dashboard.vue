<template>
    
    <div class="container">

        <!-- Save & Load Buttons -->
        <app-save-load></app-save-load>
        
        <!-- BiWeekly Chart -->
        <div class="regularChart">

            <app-bi-weekly-chart></app-bi-weekly-chart>

        </div>

        <!-- Charts For Mobile Views -->
        <div class="mobileCharts">

            <!-- Current Week Chart -->
            <app-current-week-chart></app-current-week-chart>

            <!-- Previous Week Chart -->
            <app-previous-week-chart></app-previous-week-chart>

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
    import PreviousWeekChart from "./dbCharts/PreviousWeekChart.vue"
    import DashboardFavorites from "./dbFavorites/DashBoardFavorites.vue"

    export default {

        components: {
            
            appSaveLoad: SaveLoad,
            appBiWeeklyChart: BiWeeklyChart,
            appCurrentWeekChart: CurrentWeekChart,
            appPreviousWeekChart: PreviousWeekChart,
            appDashboardFavorites: DashboardFavorites,
            
        },
        
    }

</script>

<style scoped>

    @media (max-width: 575px) {
        .regularChart {
            height:0;
            overflow:hidden;
        }
        .mobileCharts {
            height:auto;
            overflow:inherit;
        }
    }
    @media (min-width: 576px) {
        .regularChart {
            height:0;
            overflow:hidden;
        }
        .mobileCharts {
            height:auto;
            overflow:inherit;
        }
    }
    @media (min-width: 768px) {
        .regularChart {
            height:0;
            overflow:hidden;
        }
        .mobileCharts {
            height:auto;
            overflow:inherit;
        }
    }
    @media (min-width: 992px) {
        .regularChart {
            height:auto;
            overflow:inherit;
        }
        .mobileCharts {
            height:0;
            overflow:hidden;
        }
    }
    @media (min-width: 1200px) {
        .regularChart {
            height:auto;
            overflow:inherit;
        }
        .mobileCharts {
            height:0;
            overflow:hidden;
        }
    }

</style>