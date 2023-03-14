//This webpage /regulars/list renders a list of the user's regularly-frequented restaurants and allows the user to add, edit, or review a restaurant.

import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Typography } from "@material-ui/core"
import { Box, Grid } from "@material-ui/core";

import ErrorList from "./layout/ErrorList";
import translateServerErrors from "./../services/translateServerErrors";

import NewRegularForm from "./NewRegularForm";
import RegularTile from "./RegularTile";

const RegularsListPage = (props) => {
  console.log("RegularsListPage > props: ", props);
  //move regulars state up to App.js so Menu component can also access regulars state
  //const [regulars, setRegulars] = useState([]);

  const [errors, setErrors] = useState({});

  const getRegulars = async () => {
    console.log("RegularsListPage > getRegulars > props.user.id: ", props.user.id);
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

  const addRegular = async (newRegularData) => {
    console.log("RegularsListPage > addRegular > props.user.id: ", props.user.id);
    try {
      //include user's ID in the request to add a restaurant to favorites:
      newRegularData.userId = props.user.id;
      const response = await fetch("/api/v1/regulars", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newRegularData),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      }
      const body = await response.json();
      getRegulars();
      setErrors([]);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  const regularTiles = props.regulars.map((regular) => {
    //Render only the favorites that belong to the specific signed-in user
    if (regular.userId === props.user.id) {
      return <RegularTile key={regular.id} id={regular.id} name={regular.name} />;
    }
  });

  let form;
  if (props.user) {
    form = <NewRegularForm addRegular={addRegular} />;
  }

  console.log("RegularsListPage > regulars: ", props.regulars);

  return (
    <div className="f-container text-center">
      <h1 className="f-header">On Regular Rotation</h1>
      <ErrorList errors={errors} />
      <div className="text-center">
        <ul>{regularTiles}</ul>
      </div>
      {form}
    </div>
  );
};

export default RegularsListPage;
