import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button, CssBaseline, Grid, Paper, Typography } from "@material-ui/core";
import menuStyles from "../services/menuStyles";

const Menu = (props) => {
  const classes = menuStyles();

  const getRegulars = async () => {
    try {
      //const response = await fetch("/api/v1/regulars")
      //include user's ID in the request to get favorites:
      const response = await fetch(`/api/v1/regulars?userId=${props.user.id}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const regularData = await response.json();
      props.setRegulars(regularData.regulars);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getRegulars();
  }, []);

  const handleFavoritesSubmit = (event) => {
    //if user has no regulars, redirect to /regulars page
    //else if user has regulars, link to /suggested-restaurant
    if (props.regulars.length === 0) {
      return (location.href = "/regulars");
    } else {
      return (location.href = "/suggested-restaurant");
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleFavoritesSubmit}
        >
          Pick from favorites
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() => (location.href = "/wildcard")}
        >
          Pick a wildcard
        </Button>
      </div>
      {/* <img src={Spaghetti} alt="bottom left image" style={{ position: 'absolute', bottom: 0, left: 0, width: 200, height: 200 }} /> */}
    </div>
  );
};

export default Menu;
