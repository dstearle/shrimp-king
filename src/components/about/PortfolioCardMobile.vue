<template>
    
    <div>

        <!-- Links To Portfolio & Github -->
        <div class="card leftRound bg-success text-white">

            <div class="card-body">

                <div class="row">

                    <!-- Image Column -->
                    <div class="col align-self-center">

                        <!-- Portfolio Image -->
                        <img 
                            src="./../../assets/images/dallasPortrait.png" 
                            class="portfolio-avatar" 
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
                            <strong class="mr-auto">

                                <a class="text-white" href="http://dstearle.com/">my portfolio</a>

                            </strong>

                            <!-- Shrimp King Repo -->
                            <strong class="mx-auto">

                                <a class="text-white" href="https://github.com/dstearle/shrimp-king">shrimp king repo</a>

                            </strong>

                            <!-- Github Repo -->
                            <strong class="ml-auto">

                                <a class="text-white" href="https://github.com/dstearle">github profile</a>

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

    .portfolio-avatar {
        height: 250px;
        width: 250px;
        border-radius: 9999px;
        display: block;
    }

</style>