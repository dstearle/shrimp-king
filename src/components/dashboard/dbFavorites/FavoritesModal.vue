<template>

  <transition name="modal-fade">

    <div class="modal-backdrop">

      <div class="card dbFavHeight">

        <div class="card-body">

            <!-- Modal Title -->
            <h3>Add Items To Favorites</h3>

            <hr>

            <!-- Shrimp List -->
            <div class="col">
                
                <!-- <app-favorite-slots 
                    v-for="shrimp in favoritesMarket"
                    :shrimp="shrimp" 
                    v-bind:key="shrimp.name" 
                ></app-favorite-slots> -->hi
                
            </div>

            <hr>

            <div class="row">

                <div class="col-6"></div>

                <!-- Clost Modal Button -->
                <div class="col-6">

                    <button 
                        type="button" 
                        class="btn btn-block btn-outline-success"
                        @click="favModalToggle"
                    >
                        
                        Close

                    </button>

                </div>

            </div>



        </div>

    </div>

    </div>

  </transition>

</template>

<script>

    import { mapActions } from 'vuex';

    export default {

        name: 'modal',

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

</style>