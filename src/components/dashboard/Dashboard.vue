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
        <app-dashboard-favorites></app-dashboard-favorites>
        
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
            width: 0;
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
            width: 0;
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
            width: 0;
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
            width: auto;
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
            width: auto;
        }
        .mobileCharts {
            height:0;
            overflow:hidden;
        }
    }

</style>