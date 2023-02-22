import React from "react";
import { Redirect, Route } from "react-router";

const AuthenticationCheck = ({ render, component: Component, user }) => {
  if (user === undefined) {
    return <div>Loading...</div>;
  }
  if (user !== null) {
    if (Component) {
        return <Component user={user} />;
      }
      if (render) {
        return render({ user });
      }
  }

  return <Redirect to="/user-sessions/new" />;
};

const WildcardAuthenticatedRoute = ({ render, component, user, ...rest }) => {
  return (
    <Route {...rest}>
      <AuthenticationCheck user={user} component={component} render={render} />
    </Route>
  );
};

export default WildcardAuthenticatedRoute;