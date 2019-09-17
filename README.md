# shrimp-king

<br>

<strong>Link To Live Website :</strong>

- http://shrimp-king.s3-website-us-west-2.amazonaws.com/

<br>

<strong>What Is This Project? :</strong>

- Welcome to Shrimp King, an ecommerce website sim! In this simulator users can buy and sell fancy shrimp over a period of time. Starting with a set amount of funds the user can visit the "Market" page where various shrimps will be sold for varying prices. Each day the prices and available shrimp will randomly go up or down, so it is in the user's best interest to buy low then sell high to gain a profit. Every time a shrimp is purchased it is added to the user's inventory on the "Inventory" page where they will have the option to sell their available shrimps. Once the user has completed all transactions (sales/purchases) for that day they can then visit the "Dashboard" page where they can end the day, which will randomize both the prices and quantities for shrimp in the market. The "Dashboard" page will also have also has a save/load feature so that user's can save their current session and load it at a different time.

<br>

<strong>What Is The Purpose For This Project? :</strong>

- The purpose of Shrimp King is to show off my skills using the javascript framework Vue.js and other resources it can implement. A particular highlight would be the use of Vuex to keep track of data between the user's inventory and the market as well as saving/loading that data onto an actual database (I am currently using firebase for this project).

<br>

<strong>What Are The Functions For Each Page? :</strong>

Dashboard:

- The dashboard page is where the user can save their current progress, load a previously saved game or end they fiscal day. Ending the day will randomize the prices and available quantities for shrimp in the market. The prices for shrimp you purchased in your inventory will also match their current market prices.

Inventory:

- The inventory page allows you to sell shrimp you have purchased. The quantity for each shrimp will only change as you buy or sell more shrimp. The prices for the shrimp will match the current day's market price. So make sure to sell when the market price is higher than what you originally purchased.

Market:

- The market is where you may buy new or more shirmp. Each day will have new prices and quantities. If you buy all of the available quantity for a particular shrimp its card will disappear until you either sell any amount of that type of shrimp or by ending the day (Note: Some shrimp might not always be available). 

<br>

<strong>The Item Cards :</strong>

- The cards that display each shrimp come from two reusable components (One for inventory and one for the market). To generate the information for each card, data stored in a file is put into a for loop. Each shrimp has its own data object nested with elements such as a picture, name, and even the styling for the card. The data objects for each shrimp also store the maximum and minimum prices and quantites that are used in the market (and the inventory pricing as well).

<br>

<strong>To Do List:</strong>

- Navbar:
- Dashboard Section:
- Inventory Section:
- Market Section:
- Misc:

<br>

<strong>Future Developments:</strong>

- Favorite system
- Refactor for new types of shrimp (Caridina, Crayfish, Misc)
- Chart for dashboard showing prices for shrimp over a period of time
- Search bar

<br>

<strong>Dependencies:</strong>

- vuex
- vue-router
- vue-resource
