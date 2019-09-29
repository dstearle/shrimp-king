<template>
    
    <div>

        <!-- Links To Portfolio & Github -->
        <div class="card leftRound bg-success text-white">

            <div class="card-body">

                <div class="row">

                    <!-- Image Column -->
                    <div class="col">

                        <!-- Portfolio Image -->
                        <img 
                            src="./../../assets/images/dallasPortrait.png" 
                            class="portfolio-avatar-mobile mx-auto d-block" 
                            alt="Portfolio Picture Mobile"
                        >

                    </div>

                </div>

                <div class="row">

                    <!-- Image Column -->
                    <div class="col mt-3 align-self-center">

                        <h5>More From The Developer</h5>

                        <hr>

                        <!-- Card Footer -->
                        <div class="row" style="padding:0px 20px 0px 20px">

                            <!-- My Portfolio -->
                            <strong class="my-2 col-md-12 col-lg-4">

                                <font-awesome-icon 
                                    icon="globe" 
                                    class="text-white"
                                />

                                <a class="text-white pl-2" href="http://dstearle.com/">my portfolio</a>

                            </strong>

                            <!-- Shrimp King Repo -->
                            <strong class="my-2 col-md-12 col-lg-4">

                                <font-awesome-icon 
                                    icon="crown" 
                                    class="text-white"
                                />

                                <a class="text-white pl-2" href="https://github.com/dstearle/shrimp-king">project repo</a>

                            </strong>

                            <!-- Github Repo -->
                            <strong class="mt-2 col-md-12 col-lg-4">

                                <font-awesome-icon 
                                    :icon="['fab', 'github-alt']" 
                                    class="text-white"
                                />

                                <a class="text-white pl-2" href="https://github.com/dstearle">github profile</a>

                            </strong>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<style scoped>

    .leftRound
    {
        border-radius: 150px 150px 10px 10px;
    }

    .portfolio-avatar-mobile {
        height: 250px;
        width: 250px;
        border-radius: 9999px;
    }

</style>