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
                            <a class="mr-auto" href="http://dstearle.com/">

                                <font-awesome-icon 
                                    icon="globe" 
                                    class="text-white"
                                    @mouseover="activeInfo = true"
                                    @mouseleave="activeInfo = false"
                                    :class="{ active: activeInfo , 'inActiveHover': !activeInfo }"
                                />
                            
                            </a>

                            <!-- Shrimp King Repo -->
                            <a class="mx-auto" href="https://github.com/dstearle/shrimp-king">

                                <font-awesome-icon 
                                    icon="crown" 
                                    class="text-white"
                                    @mouseover="activeInfo = true"
                                    @mouseleave="activeInfo = false"
                                    :class="{ active: activeInfo , 'inActiveHover': !activeInfo }"
                                />
                            
                            </a>

                            <!-- Github Repo -->
                            <a class="ml-auto" href="https://github.com/dstearle">

                                <font-awesome-icon 
                                    :icon="['fab', 'github-alt']" 
                                    class="text-white"
                                    @mouseover="activeInfo = true"
                                    @mouseleave="activeInfo = false"
                                    :class="{ active: activeInfo , 'inActiveHover': !activeInfo }"
                                />
                            
                            </a>

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