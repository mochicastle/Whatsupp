NAME
WhatSupp

GITHUB LINK
https://github.com/mochicastle/Whatsupp.git

DESCRIPTION
A full-stack web application that simplifies the decision-making process of choosing a
restaurant to eat at or order takeout/delivery from. This app allows users to create a
list of their favorite restaurants that they regularly visit, and it picks one of the
restaurants from the user's favorites list or suggests a random restaurant based on user's
preferred ethnic cuisine, distance, and price point.

TECHNOLOGIES USED
--JavaScript
--HTML
--CSS
--Express
--React
--Yelp Fusion API

USER STORIES & ACCEPTANCE CRITERIA

USER SIGN-UP AND AUTHENTICATION

User story:
As a user, I want to be able to sign up to use the app by creating a username and password as
well as providing my name and email.

Acceptance criteria:
--The user can enter a unique username and password to sign up for the app.
--The user can submit the form to create a new account.
--The user is notified if their:
    --chosen username or email address is already in use.
    --login credentials are incorrect.
--The user's login information is stored securely.
--The user can log into the app using their username and password.

ADDING A FAVORITE RESTAURANT

User story:
As a user, I want to be able to add the name of a restaurant to my favorites list.

Acceptance criteria:
--The user can input the name of a restaurant into a text field.
--The user can submit the name of the restaurant to add it to their list of favorite restaurants.
--This functionality uses React.js

CHOOSING A FAVORITE RESTAURANT

User story:
As a user, I want to be able to randomly select a restaurant from my list of favorite restaurants.

Acceptance criteria:
--The user can click a button to randomly select a restaruant from their favorites list.
--The app will display the name of the restaurant.
--Potential additional functionality: the user can click another button to randomly select
another restaurant.

CHOOSING A WILDCARD RESTAURANT

User story:
As a user, I want to be able to randomly select a restaurant from a list of restaurants based
upon the criteria I provide: cuisine, distance, and price point.

Acceptance criteria:
--The user can submit a form with fields indicating cuisine, distance, and price point.
--The app will display the name of a restaurant that fits those specifications or it will display
a response that no restaurant meeting that criteria can be found.
--Potential additional functionality: the user can click another button to add the randomly
selected wildcard restaurant to their list of favorite restaurants.