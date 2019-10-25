<template>

  <transition name="modal-fade">

    <div class="modal-backdrop">

      <div class="card dbFavHeight">

        <div class="card-body" style="height: 590px;">

            <div>

                <!-- Modal Title -->
                <h3>Add Items To Favorites</h3>

                <hr>

            </div>

            <div class="scroll">

                <!-- Neocaridina List -->
                <div class="my-5" v-show="neocaridinaMarket.length > 0">

                    <!-- Shrimp Category Title -->
                    <h5 class="pb-3">Neocaridina</h5>

                    <!-- Shrimp List -->
                    <div class="col">
                        
                        <app-modal-slots 
                            v-for="shrimp in neocaridinaMarket" 
                            :shrimp="shrimp" 
                            v-bind:key="shrimp.id" 
                            v-show="shrimp.quantity > 0"
                        ></app-modal-slots>
                        
                    </div>

                    <hr>

                </div>

                <!-- Caridina List -->
                <div class="my-5" v-show="caridinaMarket.length > 0">

                    <!-- Shrimp Category Title -->
                    <h5 class="pb-3">Caridina</h5>

                    <!-- Shrimp List -->
                    <div class="col">
                        
                        <app-modal-slots 
                            v-for="shrimp in caridinaMarket" 
                            :shrimp="shrimp" 
                            v-bind:key="shrimp.id" 
                            v-show="shrimp.quantity > 0"
                        ></app-modal-slots>
                        
                    </div>

                    <hr>

                </div>

            </div>

            <!-- Footer Area -->
            <div class="row mt-4">

                <div class="col-6"></div>

                <!-- Clost Modal Button -->
                <div class="col-6">

                    <button 
                        type="button" 
                        class="btn btn-block btn-outline-success"
                        @click="favModalToggle"
                    >
                        
                        Done

                    </button>

                </div>

            </div>

        </div>

    </div>

    </div>

  </transition>

</template>

<script>

    import { mapGetters, mapActions } from 'vuex';
    import ModalSlots from './ModalSlots.vue';

    export default {

        components: {
            
            appModalSlots: ModalSlots
            
        },

        computed: {

            ...mapGetters({
                
                // Retrieves the data for market from the store
                shrimpMarket: 'shrimpMarketDataGet'
                
            }), 
            
            // The filtered list for neocaridina shrimps
            neocaridinaMarket() {
                
                // Array to hold available shrimp
                const arr = this.shrimpMarket;

                // Filters out shrimp based off id
                const range = arr.filter(element => element.id < 7 );

                // Filters out shrimp that have been favorited
                return range.filter(shrimp => shrimp.favorited != true)
                
            },

            // The filtered list for ccaridina shrimps
            caridinaMarket() {
                
                // Array to hold available shrimp
                const arr = this.shrimpMarket;

                // Filters out shrimp based off id
                const range = arr.filter(element => element.id > 6 );

                // Filters out shrimp that have been favorited
                return range.filter(shrimp => shrimp.favorited != true)
                
            },

        },

        methods: {

            ...mapActions({

                // Closes the favorites modal by toggling to false
                favModalToggle: 'favModalToggle'

            }),

        },
        
    };

</script>

<style>

    .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    }

    .modal-header,
    .modal-footer {
    padding: 15px;
    display: flex;
    }

    .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    }

    .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
    }

    .modal-body {
    position: relative;
    padding: 20px 10px;
    }

    .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
    }

    .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    }

    .scroll {
    max-height: 420px;
    overflow-y: auto;
}

</style>