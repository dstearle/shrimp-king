<template>
    
    <div>

        <!-- Links To Portfolio & Github -->
        <div class="card leftRound bg-success text-white">

            <div class="card-body">

                <div class="row">

                    <div class="col-4">

                        <div class="d-flex align-self-center">

                            <!-- Portfolio Image -->
                            <img src="./../../assets/images/dallasPortrait.png" class="portfolio-avatar" alt="Portfolio Picture">

                        </div>

                    </div>

                    <div class="col-8">

                        <p>
                            Interested in seeing or learning more about Shrimp King and other projects I have worked on? 
                            This project along with many others can be found on my personal portfolio and github profile!
                        </p>

                        <!-- Card Footer -->
                        <div class="row" style="padding:0px 20px 0px 20px">

                            <strong class="mr-auto">

                                <!-- My Portfolio -->
                                <a class="text-white" href="http://dstearle.com/">my portfolio</a>

                            </strong>

                            <strong class="ml-auto">

                                <!-- Github Repo -->
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
        border-radius: 130px 10px 10px 130px;
    }

    .portfolio-avatar {
        height: 250px;
        width: 250px;
        border-radius: 9999px;
        display: block;
        margin-right: 0.5rem;
    }

</style>