# nightlite

Nightlite is an app to help stargazers find and share the best places for stargazing. Our app helps you find locations with less light pollution, giving you the darkest skies to see the brightest stars.

Check out a walkthrough of our app here: [https://youtu.be/jhVOPEd9WoQ](https://youtu.be/jhVOPEd9WoQ)

Our current deployed version is here: [https://nightlite-app.herokuapp.com/](https://nightlite-app.herokuapp.com/)

 ![alt text](https://github.com/mehrimo/nightlite/blob/master/public/imgs/screenshot_index.png?raw=true)

### Some Disclaimers

A walkthrough will be provided so you can experience the app, or here are some other ways you can use it:

1. You can create a new account and login using the Heroku deployment link.
2. You can also fork and clone, and run from localhost:8000.

### Features

1. The **home page** allows a new user to explore and learn more about light pollution or login.
2. The **explore page** gives a brief description on light pollution and shows a comparison of how it effects the night sky. There are also two light pollution maps to navigate.
3. The **login page** will allow you to create a new account and signs you in via session cookies.
4. Upon signing it, you'll land on the **map page**. You'll see a large map view which automatically finds your location. You can also search a different location by entering a zip code. Navigating the page, you'll notice observations are posted below the map. A user can post a new observation, which will add a new data point to the map. You can click on each data point to view the observation info. A user can also add, update and delete comments on any observation.

### Technologies Used

1. **ArcGIS API:** Used to get map data.
2. **ESRI ArcGIS**: Used to dynamically plot points on a map, use geolocation to plot user's current location and access light pollution layers.
3. This app uses **Materialize** for the front-end design. To build our database, we used **PostgreSQL** and **Express** to query it.

