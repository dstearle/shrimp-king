<template>
    
    <div class="container">

        <!-- Save & Load Buttons -->
        <app-save-load></app-save-load>
        
        <div class="row py-3">

            <div class="col">

                <div class="card">

                    <div class="card-body px-5 pb-5">

                        <app-dashboard-chart></app-dashboard-chart>

                    </div>

                </div>

            </div>

        </div>
        
    </div>
    
</template>

<script>

    import SaveLoad from "./SaveLoad.vue"
    import DashboardChart from "./DashboardChart.vue"

    export default {

        components: {
            
            appSaveLoad: SaveLoad,
            appDashboardChart: DashboardChart
            
        },
        
    }

</script>