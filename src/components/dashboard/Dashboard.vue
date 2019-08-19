<template>
    
    <div class="container">

        <!-- Save & Load Buttons -->
        <app-save-load></app-save-load>
        
        <div class="row py-3">

            <div class="col">

                <div class="card">

                    <div class="card-body">

                        <h1>Shrimp King Dashboard</h1>
            
                        <h6>You may Save & Load your Data</h6>
                        
                        <h6>Click on 'End Day' to begin a New Day!</h6>

                    </div>

                </div>

            </div>

        </div>
        
    </div>
    
</template>

<script>

    import SaveLoad from "./SaveLoad.vue"

    export default {

        components: {
            
            appSaveLoad: SaveLoad
            
        },
        
    }

</script>