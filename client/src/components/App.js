import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute";
import WildcardAuthenticatedRoute from "./authentication/WildcardAuthenticatedRoute";
import Menu from "./Menu";
import LandingPage from "./LandingPage";
import TopBar from "./layout/TopBar";
import RegularsListPage from "./RegularsListPage";
import SuggestedRestaurant from "./SuggestedRestaurant";
import WildcardForm from "./WildcardForm";
import WildcardTile from "./WildcardTile";

const App = (props) => {
  const [wildcardPick, setWildcardPick] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    phone: "",
    distance: "",
  });

  const updateWildcardPick = (wildcard) => {
    setWildcardPick({
      ...wildcardPick,
      name: wildcard.name,
      street: wildcard.location.address1 ? wildcard.location.address1 : null,
      city: wildcard.location.city ? wildcard.location.city : null,
      state: wildcard.location.state ? wildcard.location.state : null,
      phone: wildcard.display_phone ? wildcard.display_phone : null,
      distance: (wildcard.distance / 1609.34).toFixed(2),
    });
  };

  const [regulars, setRegulars] = useState([]); //moved state from RegularsListPage so Menu can also access regulars
  const [currentUser, setCurrentUser] = useState(undefined);
  const [topBarVisible, setTopBarVisible] = useState(false);

  const handleMouseCursor = (event) => {
    const y = event.clientY;

    if (y <= 50) {
      setTopBarVisible(true);
    } else {
      setTopBarVisible(false);
    }
  };

  window.addEventListener("mousemove", handleMouseCursor);

  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      {location.pathname !== "/" && topBarVisible && <TopBar user={currentUser} />}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={LandingPage} />
        <WildcardAuthenticatedRoute
          exact
          path="/menu"
          user={currentUser}
          render={(props) => <Menu {...props} regulars={regulars} setRegulars={setRegulars} />}
        />
        <AuthenticatedRoute
          exact={true}
          path="/suggested-restaurant"
          component={SuggestedRestaurant}
          user={currentUser}
        />
        <WildcardAuthenticatedRoute
          exact
          path="/regulars"
          user={currentUser}
          render={(props) => (
            <RegularsListPage {...props} regulars={regulars} setRegulars={setRegulars} />
          )}
        />
        <WildcardAuthenticatedRoute
          exact
          path="/wildcard"
          user={currentUser}
          render={(props) => (
            <WildcardForm
              {...props}
              wildcardPick={wildcardPick}
              setWildcardPick={setWildcardPick}
              updateWildcardPick={updateWildcardPick}
            />
          )}
        />
        <WildcardAuthenticatedRoute
          exact
          path="/wildcard/pick"
          user={currentUser}
          render={(props) => (
            <WildcardTile
              {...props}
              wildcardPick={wildcardPick}
              setWildcardPick={setWildcardPick}
              updateWildcardPick={updateWildcardPick}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default hot(App);
