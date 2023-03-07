# PROJECT NAME: Whatsupp (stylized as "whatsupp")

## PROJECT DESCRIPTION: 
Whatsupp is a user-authenticated web application that simplifies a user's decision-making process by either randomly selecting a restaurant from a user-created list of the user's favorite or most frequently visited restaurants or from a list of restaurants queried from Yelp based on the user's location and selected criteria.

### TECHNOLOGIES: 
JavaScript, HTML, CSS, React.js, Express, Node, Material UI, Foundation UI, Babel, Webpack, Passport, Knex, Objection, Cookies

### INSTALLATION:
1. Fork and clone repository
2. Install with ```yarn install```
3. This app will render to http://localhost:3000/

### APIs:
1. Geolocation
2. Yelp Fusion

### KNOWN BUGS:
1. Registration form does not currently check for whether a user's username and email address are in use.
2. Reloading the /wildcard/pick web page results in a 404 error.
3. If the Yelp API returns with no results for restaurants that meet the user's criteria, the /wildcard/pick web page will not render.