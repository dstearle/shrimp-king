<template>
    
    <div>

        <!-- Links To Portfolio & Github -->
        <div class="card leftRound bg-success text-white">

            <div class="card-body">

                <div class="row">

                    <!-- Image Column -->
                    <div class="col-md-6 col-lg-4 align-self-center">

                        <!-- Portfolio Image -->
                        <img 
                            src="./../../assets/images/dstearle.jpg" 
                            class="portfolio-avatar" 
                            alt="Portfolio Picture"
                        >

                    </div>

                    <!-- Content Column 1 -->
                    <div class="col-md-6 col-lg-8">

                        <h3 class="d-none d-lg-block">More From The Developer</h3>

                        <h5 class="d-block d-lg-none mt-3">More From The Developer</h5>

                        <hr>

                        <p class="d-none d-lg-block">
                            Hi I am Dallas the author of "Shrimp King"!
                            Interested in learning more about Shrimp King or seeing other projects I have worked on? 
                            This project along with many others can be found on my personal portfolio and github profile!
                        </p>

                        <!-- Card Footer -->
                        <div class="row" style="padding:0px 20px 0px 20px">

                            <!-- My Portfolio -->
                            <strong class="my-3 col-md-12 col-lg-4">

                                <font-awesome-icon 
                                    icon="globe" 
                                    class="text-white"
                                />

                                <a class="text-white pl-2" href="http://dstearle.com/">my portfolio</a>

                            </strong>

                            <!-- Shrimp King Repo -->
                            <strong class="my-3 col-md-12 col-lg-4">

                                <font-awesome-icon 
                                    icon="crown" 
                                    class="text-white"
                                />

                                <a class="text-white pl-2" href="https://github.com/dstearle/shrimp-king">project repo</a>

                            </strong>

                            <!-- Github Repo -->
                            <strong class="mt-3 col-md-12 col-lg-4">

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

    .leftRound { border-radius: 150px 10px 150px 10px; }

    .portfolio-avatar {
        height: 250px;
        width: 250px;
        border-radius: 9999px;
    }

</style>