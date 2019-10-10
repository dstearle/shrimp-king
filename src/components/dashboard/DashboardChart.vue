<template>

    <div>

        <!-- Chart Title -->
        <div class="row pb-3">

            <h1>Biweekly Prices</h1>
            
        </div>

        <!-- Chart -->
        <div class="row">

            <canvas id="myChart4" height="300px" width="800px"></canvas>

        </div>

    </div>

</template>

<script>

    // Imports the different types of charts from the package
    import Chart from "chart.js";
    import { mapGetters, } from 'vuex';

    export default {

        data() {

            return {

                // Array to hold values for the chart
                // dinoSightData: DinoData,

                // Array to hold the labels for the chart
                weekDayArray:  [
                    'Sunday', 'Monday', 'Tuesday', 'Wedsday', 'Thursday', 'Friday', 'Saturday',
                    'Sunday', 'Monday', 'Tuesday', 'Wedsday', 'Thursday', 'Friday', 'Saturday',
                ],

            }

        },

        computed: {

            ...mapGetters({
                
                // Retrieves the data for market from the store
                shrimpMarket: 'shrimpMarketDataGet'
                
            }),

            // The filtered list for favorited shrimps
            favoritesMarket() {
                
                // Array to hold available shrimp
                const arr = this.shrimpMarket;

                // Filters out shrimp that have not been favorited
                return arr.filter(shrimp => shrimp.favorited != false)
                
            },
                        
        },

        methods: {

            // All that jazz to make a new chart
            initializeChart() {

                const ctx = document.getElementById('myChart4').getContext('2d');
                
                // Creates the gradient for the fill background
                let gradientStroke = ctx.createLinearGradient(0, 250, 0, 100);
                    // More color stops can be added
                    gradientStroke.addColorStop(0, "rgb(0, 7, 112, 0.3)");
                    gradientStroke.addColorStop(1, "rgb(0, 7, 112, 0.8)");

                this.chart = new Chart(ctx, {

                    // The type of chart we want to create
                    type: 'line',

                    // The data for our dataset
                    data: {
                        // Labels for the X axis
                        labels: this.weekDayArray,
                        // The data to be shown in the chart
                        datasets: []
                    },

                    // Configure your chart options here
                    options: {
                        maintainAspectRatio: false,
                        responsive: true,
                        // Configures settings fo the legend
                        legend: {
                            display: false
                        },
                        // Configures settings for the hover tooltips
                        tooltips: {
                            // Disable the on-canvas tooltip
                            enabled: false,
                            yAlign: 'bottom',
                            custom: function(tooltipModel) {
                                // Tooltip Element
                                var tooltipEl = document.getElementById('chartjs-tooltip');
                                // Create element on first render
                                if (!tooltipEl) {
                                    tooltipEl = document.createElement('div');
                                    tooltipEl.id = 'chartjs-tooltip';
                                    tooltipEl.innerHTML = '<table></table>';
                                    document.body.appendChild(tooltipEl);
                                }
                                // Hide if no tooltip
                                if (tooltipModel.opacity === 0) {
                                    tooltipEl.style.opacity = 0;
                                    return;
                                }
                                // Set caret Position
                                tooltipEl.classList.remove('above', 'below', 'no-transform');
                                if (tooltipModel.yAlign) {
                                    tooltipEl.classList.add(tooltipModel.yAlign);
                                } else {
                                    tooltipEl.classList.add('no-transform');
                                }
                                function getBody(bodyItem) {
                                    return bodyItem.lines;
                                }
                                // Set Text
                                // You can add css/bootstrap to any of the tags for better styling
                                if (tooltipModel.body) {
                                    var titleLines = tooltipModel.title || [];
                                    var bodyLines = tooltipModel.body.map(getBody);
                                    var innerHtml = '<thead>';
                                    // Sets the html for the title
                                    titleLines.forEach(function(title) {
                                        innerHtml += '<div class="m-1"><h4>' + title + '</h4></div>';
                                    });
                                    innerHtml += '</thead><tbody>';
                                    // Sets the html for body
                                    bodyLines.forEach(function(body, i) {
                                        var colors = tooltipModel.labelColors[i];
                                        var style = 'background: ' + colors.backgroundColor;
                                        style += '; border-color: ' + colors.borderColor;
                                        style += '; border-width: 2px';
                                        var span = '<span style="' + style + '"></span>';
                                        innerHtml += '<div class="m-1">' + span + body + '</div>';
                                    });
                                    innerHtml += '</tbody>';
                                    var tableRoot = tooltipEl.querySelector('table');
                                    tableRoot.innerHTML = innerHtml;
                                }
                                // `this` will be the overall tooltip
                                var position = this._chart.canvas.getBoundingClientRect();
                                // This is where you will do most of the styling for the tooltips
                                // Sets opacity for the whole tooltip area
                                tooltipEl.style.opacity = 1;
                                // Helps set position for tooltip area
                                tooltipEl.style.position = "absolute";
                                // Sets background color for the tooltip area
                                tooltipEl.style.backgroundColor = "white";
                                // Settings for caret position?
                                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                                // Font styling for tooltips?
                                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
                                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                                // Sets padding for tooltips
                                tooltipEl.style.padding =
                                    tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
                                // Needs documentation
                                tooltipEl.style.pointerEvents = "none";
                                // Sets the width and color of the toolips border
                                tooltipEl.style.border = "3px solid rgb(0, 7, 112)";
                                // Rounds the corners of the tooltip area
                                tooltipEl.style.borderRadius = "20px";
                            }
                        },
                        // Configures the X and Y axes
                        scales:{
                            // Allows you to customize the X axis
                            xAxes: [{
                                
                                gridLines: {
                                    lineWidth: [
                                        1, 1, 1, 1, 1,
                                        1, 3, 1, 1, 1,
                                        1, 1, 1, 3,
                                    ],
                                    color: [
                                            '#73737a', '#73737a', '#73737a', '#73737a', '#73737a', 
                                            '#73737a', '#73737a', '#73737a', '#73737a', '#73737a', 
                                            '#73737a', '#73737a', '#73737a', '#73737a', '#73737a',
                                    ],
                                    tickMarkLength: 0,
                                },
                                ticks: {
                                    padding: 15,
                                }
                            }],
                            // Allows you to customize the Y axis
                            yAxes: [{
                                
                                gridLines: {
                                    // Thickness and color for horizontal grid lines
                                    lineWidth: [
                                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                                        1, 1,
                                    ],
                                    color: [
                                            '#73737a', '#73737a', '#73737a', '#73737a', '#73737a',
                                            '#73737a', '#73737a', '#73737a', '#73737a', '#73737a',
                                            '#73737a', '#73737a',
                                    ],
                                    tickMarkLength: 0,
                                },
                                ticks: {
                                    padding: 15,
                                    max: 1200,
                                    min: 0,
                                    stepSize: 100
                                },
                            }]
                        }
                    }
                })
            },

            chartDatasets() {

                // For every year in your data ...
                for (let i = 0; i < this.favoritesMarket.length; i++) {

                    let obj = {};
                    
                    obj['label'] = this.favoritesMarket[i].name;
                    obj['borderColor'] = this.favoritesMarket[i].chartBorder;
                    obj['backgroundColor']  = this.favoritesMarket[i].chartColor;
                    obj['data'] = this.favoritesMarket[i].weeklyPrices;

                    // Pushes the retrieved datasets into the chart
                    this.chart.data.datasets.push(obj);

                }

                // Finally, make sure you update your chart, to get the result on your screen
                this.chart.update();

            },

            // Method that changes the X axis labels and insert new data
            dayChange() {

                // Retrieves the dataset values for each item
                for(let i = 0; i < this.dinoSightData.length; i++) {

                    // Randomizes the price for each available shrimp between their minimum and maximum prices
                    let newDaySightings = Math.round((Math.random() * (100 - 0 + 1)) + 0);

                    // Removes the first element in the dinoSightings array
                    this.chart.data.datasets[i].data.shift();
                    // Pushes a new element into the dinoSightings array
                    this.chart.data.datasets[i].data.push(newDaySightings);
                    
                }

                // Takes the first element from the labels array and pushes it to the end of the array
                this.weekDayArray.push(this.weekDayArray.shift());

                // Renders the chart again with new info
                this.chart.update();

            },

        },

        mounted() {

            // Renders the chart on load
            this.initializeChart();
            this.chartDatasets();
            
        },
        
    };

</script>