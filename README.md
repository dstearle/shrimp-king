# shrimp-king

<br>

**Link To Live Website :**

- http://shrimp-king.s3-website-us-west-2.amazonaws.com/

<br>

**What Is This Project? :**

- Shrimp King is an ecommerce website sim where you can buy or sell fancy shrimp. The main purpose of this project is to demonstrate my skills using Vuex. Vuex is a state management pattern tool for Vue.js just like React's "Redux" or Facebook's "Flux". With this very useful tool you can create a centralized store which can serve as the source of a state for data used across multiple components.

<br>

**What Do I Do? :**

- At the top right of your screen you can see your funds. Go ahead and visit the market page and purchase whatever you can. Once you have made your purchases or if you would rather wait and see how the prices change head over to the Dashboard and end your day. Each day will randomize the prices and available quantities of shrimp available for sale on the market page (Note: some shrimp might not be available on certain days). The prices of shrimp you have purchased will match that current day's market price, so try to buy then sell high to gain a profit!

<br>

**What Are The Functions For Each Page? :**

Dashboard:

- The dashboard page is where the user can save their current progress, load a previously saved game or end they fiscal day. Ending the day will randomize the prices and available quantities for shrimp in the market. The prices for shrimp you purchased in your inventory will also match their current market prices.

Inventory:

- The inventory page allows you to sell shrimp you have purchased. The quantity for each shrimp will only change as you buy or sell more shrimp. The prices for the shrimp will match the current day's market price. So make sure to sell when the market price is higher than what you originally purchased.

Market:

- The market is where you may buy shirmp. Each day will have new prices and quantities. If you buy all of the available quantity for a particular shrimp its card will disappear until you either sell any amount of that type of shrimp or by ending the day (Note: Some shrimp might not always be available). 

<br>

**Notable Features :**

The Favorites System:

- When exploring your Inventory or the Market page you will notice a star in the upper right corner of the image for each item. This star allows the user to mark that item as "favorited" and will immeadiately remove said item from its current category and add it to the favorites list at the top (or vice versa if it is already favorited). Favoriting an item on any page will correlate across the pages. So if you favorite an item in your Inventory, said item will also be added to favorites on the Market page. This is because each item has a data object with a boolean of true or false. Through Vuex the boolean in said data object is toggled in the store so any page making use of the favorites system can correctly keep track of what items are currently being favorited.

The Dashboard Chart:

- On the Dashboard page you will see a large chart I made using a package called Chart.js (documentation here https://www.chartjs.org/). Building off of the favorites system, this chart displays the prices for favorited items over a period of two weeks. The idea being that when you hit the "End Day" button above the chart you can immeadiately see the current day's prices (located on the far right of the chart) for any favorited items and decide if it is a good time to buy or sell. The chart is dynamic and will move older prices (the data being shown) and day labels (on the X axis) to the left to make room for new data. Hovering over the data points on the chart will also bring up "tooltips" to display the name and price of said item..

<br>

**To Do List:**

- Navbar: 
- About Section:
- Dashboard Section: dynamic Y axis for chart
- Inventory Section:
- Market Section:
- Search Filter: clear out code in SearchSelect.vue, connect to vuex, use in both Inventory and Market pages
- Misc: sass for badges

<br>

**Future Developments:**

- Collapsable categories
- Ghost shrimp for skeleton screen demo
- Mark up/down sales?
- New categories for snails/plants
- Show sale/buy amount

<br>

**Dependencies:**

- vuex
- vue-router
- vue-resource
- chart.js
