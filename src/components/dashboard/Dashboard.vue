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

        <!-- Dashboard Favorites Modal -->
        <app-favorites-modal
            v-show="isFavModalVisibleGet">
        </app-favorites-modal>
        
    </div>
    
</template>

<script>

    import {mapGetters} from 'vuex';
    import SaveLoad from "./SaveLoad.vue"

    import BiWeeklyChart from "./dbCharts/BiWeeklyChart.vue"
    import CurrentWeekChart from "./dbCharts/CurrentWeekChart.vue"
    import PreviousWeekChart from "./dbCharts/PreviousWeekChart.vue"

    import DashboardFavorites from "./dbFavorites/DashBoardFavorites.vue"
    import FavoritesModal from "./dbFavorites/favoritesModal/FavoritesModal.vue"

    export default {

        components: {
            
            appSaveLoad: SaveLoad,

            appBiWeeklyChart: BiWeeklyChart,

            appCurrentWeekChart: CurrentWeekChart,

            appPreviousWeekChart: PreviousWeekChart,

            appDashboardFavorites: DashboardFavorites,

            appFavoritesModal: FavoritesModal
            
        },

        computed: {

            ...mapGetters({
                
                // Retrieves the data for market from the store
                shrimpMarket: 'shrimpMarketDataGet',
                // Retrieves the counter for favorited items
                isFavModalVisibleGet: 'isFavModalVisibleGet'
                
            }),

        }
        
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