<template>

    <div>

        <!-- Chart Title -->
        <div class="row pb-3">

            <h1>Biweekly Prices</h1>
            
        </div>

        <!-- Chart -->
        <div class="row">

            <canvas id="dashboardChart" height="300px" width="800px"></canvas>

        </div>

    </div>

</template>

<script>

    // Imports the different types of charts from the package
    import Chart from "chart.js";
    import { mapGetters } from 'vuex';

    export default {

        computed: {

            ...mapGetters({
                
                // Retrieves the data for market from the store
                shrimpMarket: 'shrimpMarketDataGet',
                // Retrieves the dashboard chart X axis labels
                weekDayArray: 'weekDayArrayGet'
                
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

                const ctx = document.getElementById('dashboardChart').getContext('2d');
                
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

                                // Tooltips HTML
                                // For setting the html of the tooltips area
                                if (tooltipModel.body) {
                                    var titleLines = tooltipModel.title || [];
                                    var bodyLines = tooltipModel.body.map(getBody);

                                    // Starting tag for table header
                                    var innerHtml = '<thead>';

                                    // Sets the html for the title
                                    titleLines.forEach(function(title) {
                                        innerHtml += '<div class="m-1"><h4>' + title + '</h4></div>';
                                    });

                                    // End tag for table header and start tag for table body header
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

                                    // End tag for the table body
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

            // Retrieves the datasets to be used by the chart
            chartDatasets() {

                // For loop to retrieve data objects from filtered favorites
                for (let i = 0; i < this.favoritesMarket.length; i++) {

                    // Creates an empty object to hold data
                    let obj = {};
                    
                    // The items to be stored in the object
                    obj['label'] = this.favoritesMarket[i].name;
                    obj['borderColor'] = this.favoritesMarket[i].chartBorder;
                    obj['backgroundColor']  = this.favoritesMarket[i].chartColor;
                    obj['data'] = this.favoritesMarket[i].weeklyPrices;

                    // Pushes the retrieved datasets into the chart
                    this.chart.data.datasets.push(obj);

                }

                // Renders the chart with new data
                this.chart.update();

            },

        },

        mounted() {

            // Renders the chart on load
            this.initializeChart();
            // Loads in the data for the chart
            this.chartDatasets();
            
        },

        watch: {
            
            // Checks for changes in the store for weekDayArray
            weekDayArray: {

                handler() {

                    // Renders the chart again with new data
                    this.chart.update();

                }

            },

            // Checks for changes in the store for shrimpMarket
            shrimpMarket: {

                handler() {

                    // Removes the old chart
                    this.chart.destroy();
                    // Renders a new chart on load
                    this.initializeChart();
                    // Loads in the data for the chart
                    this.chartDatasets();

                }

            },

        },
        
    };

</script>