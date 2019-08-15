# shrimp-king

<br>

<strong>Link To Live Website :</strong>

- Coming soon.

<strong>What Is This Project? :</strong>

- Welcome to Shrimp King basic ecommerce website sim! In this simulator users can buy and sell fancy shrimp over a period of time. Starting with a set amount of funds the user can visit the "Market" page where various shrimps will be sold for varying prices. Each day the prices will randomly go up or down so it is the users best interest to buy low then sell high to gain a profit. Every time a shrimp is purchased it is added to the user's inventory on the "Inventory" page where they will have the option to sell their available shrimps. Once the user has completed all transactions for that day they can then visit the "Dashboard" page where they can end the day which will randomize the prices for shrimp. The "Dashboard" page will also have a save/load feature so that user's can save their current session and load it at a different time.

- The data for each shrimp is stored in a file that is used by Vuex to populate a list of cards. The cards come from a reusable component that has the basic format of the card and uses stored data to fill out aspects of the card such as the photo of the shrimp and it's name.

<strong>To Do List:</strong>

- Fix HMR error (sockjs related from previous project?)
- Navbar: Make collapse feature
- Dashboard Section: Add save/load features, add end day feature, style area
- Inventory Section: Refactor for new item types, info icon overlay
- Market Section: Refactor for new item types, info icon overlay, add varying quantities for items
- Misc: Fix responsive scaling

<br>

<strong>Dependecies:</strong>

- vue-router:
- vuex
