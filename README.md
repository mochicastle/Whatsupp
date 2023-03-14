# Whatsupp

### PROJECT DESCRIPTION:

Whatsupp is a user-authenticated web application that simplifies a user's decision-making process by either randomly selecting a restaurant from a user-created list of the user's favorite or most frequently visited restaurants or from a list of restaurants queried from Yelp based on the user's location and selected criteria.

#### DEPLOYMENT TO HEROKU:

This app has been deployed to Heroku: https://whatsupp.herokuapp.com
Please report any Heroku-related bugs to Michelle at michelle@mochicastle.com.

#### TECHNOLOGIES:

JavaScript, HTML, CSS, React.js, Express, Node, Material UI, Foundation UI, Babel, Webpack, Passport, Knex, Objection, Cookies

#### INSTALLATION:

1. Fork and clone repository
2. Install with `yarn install`
3. This app will render to http://localhost:3000/

#### APIs:

1. Geolocation
2. Yelp Fusion

#### APIs:

1. Whatsupp requires a user to be logged in in order to use the app. New users should register their username, email, and password. Existing users can log in.
2. New users do not have any associated favorite restaurants from which the app can pick a random favorite. The new user can click on "Edit favoties" in the top bar OR "Pick from favorites" (which will redirect the user to the "Edit favorites" page at "/regulars").
3. Existing users who have favorties can view and add to their favorites by clicking on "Edit favorites" in the top bar.
4. On the "/menu" page, if the user clicks on "Pick from favorites", Whatsupp will randomly select a retaurant from the user's favorites and render it to the user.
5. On the "/menu" page, if the user clicks on "Pick a wildcard", Whatsupp will render a form for the user to complete querying the user for their cuisine, distance, and price preferences. When the user submits the form, the app will query Yelp for results meeting the user's criteria, randomly select one of Yelp's results, and render the randomly-selected restaurant to the user.

#### KNOWN BUGS:

1. Registration form does not currently check for whether a user's username and email address are in use.
2. Reloading the /wildcard/pick web page results in a 404 error. Current workaround is to click on "Menu" in the top bar to return to menu page.
3. If the Yelp API returns with no results for restaurants that meet the user's criteria, the /wildcard/pick web page will not render.
