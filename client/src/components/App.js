import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import AuthenticatedRoute from "./authentication/AuthenticatedRoute"
import SignInForm from "./authentication/SignInForm"
import TopBar from "./layout/TopBar"
import RegularsListPage from "./RegularsListPage"
import RandomRegularPage from "./RandomRegularPage"
import WildcardForm from "./WildcardForm"
import WildcardTile from "./WildcardTile"

const App = (props) => {

  const [wildcardPick, setWildcardPick] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    phone: "",
    distance: ""
  })

  const updateWildcardPick = (wildcard) => {
    setWildcardPick({
      ...wildcardPick,
      name: wildcard.name,
      street: wildcard.location.address1,
      city: wildcard.location.city,
      state: wildcard.location.state,
      phone: wildcard.display_phone,
      distance: (wildcard.distance / 1609.34).toFixed(2)
    })
  }
  
  const [currentUser, setCurrentUser] = useState(undefined)

  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  let greeting = "Hello from react"
  if (currentUser) {
    greeting += `, ${currentUser.email}`
  }

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/">
          <h2>{greeting}</h2>
        </Route>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <AuthenticatedRoute exact={true} path="/regulars" component={RegularsListPage} user={currentUser} />
        <AuthenticatedRoute exact={true} path="/regulars/random" component={RandomRegularPage} user={currentUser} />
        <Route
          exact
          path="/wildcard"
          user={currentUser}
          render={(props) => <WildcardForm {...props} wildcardPick={wildcardPick} setWildcardPick={setWildcardPick} updateWildcardPick={updateWildcardPick} user={currentUser} />}
        />
        <Route
          exact
          path="/wildcard/pick"
          user={currentUser}
          render={(props) => <WildcardTile {...props} wildcardPick={wildcardPick} setWildcardPick={setWildcardPick} updateWildcardPick={updateWildcardPick} user={currentUser} />}
        />
        {/* <AuthenticatedRoute exact={true} path="/wildcard" component={WildcardForm} updateWildcardPick={updateWildcardPick} user={currentUser} />
        <AuthenticatedRoute exact={true} path="/wildcard/pick" component={WildcardTile} updateWildcardPick={updateWildcardPick} user={currentUser} /> */}
      </Switch>
    </Router>
  )
}

export default hot(App)
