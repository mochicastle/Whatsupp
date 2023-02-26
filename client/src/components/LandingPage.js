import React, { useState } from "react";
import config from "../config";
import FormError from "./layout/FormError";
import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import signInStyles from "../services/signInStyles";
import SignInLogo from "../assets/Images/SignInLogo.png";

const LandingPage = (props) => {
  const classes = signInStyles();

  const [userPayload, setUserPayload] = useState({ email: "", password: "" });
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});

  const validateInput = (payload) => {
    setErrors({});
    const { email, password } = payload;
    const emailRegexp = config.validation.email.regexp;
    let newErrors = {};
    if (!email.match(emailRegexp)) {
      newErrors = {
        ...newErrors,
        email: "is invalid",
      };
    }

    if (password.trim() === "") {
      newErrors = {
        ...newErrors,
        password: "is required",
      };
    }

    setErrors(newErrors);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(errors, "errors");
    validateInput(userPayload);
    try {
      if (Object.keys(errors).length === 0) {
        const response = await fetch("/api/v1/user-sessions", {
          method: "post",
          body: JSON.stringify(userPayload),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        });
        debugger;
        if (!response.ok) {
          if (response.status === 401) {
            // const body = await response.json();
            // const newErrors = translateServerErrors(body.errors);
            let newErrors = {};
            newErrors = {
              ...newErrors,
              email: "is not registered",
            };
            return setErrors(newErrors);
          } else {
            const errorMessage = `${response.status} (${response.statusText})`;
            const error = new Error(errorMessage);
            throw error;
          }
        }
        const userData = await response.json();
        setShouldRedirect(true);
      }
    } catch (err) {
      console.log(errors, "catch");
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  const onInputChange = (event) => {
    setUserPayload({
      ...userPayload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  if (shouldRedirect) {
    location.href = "/menu";
  }

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <ErrorList errors={errors} />
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper} onSubmit={onSubmit}>
            <img src={SignInLogo} />
            <Typography component="h1" variant="h5">
              Welcome
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                type="text"
                value={userPayload.email}
                onChange={onInputChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <FormError error={errors.email} />
              <TextField
                value={userPayload.password}
                onChange={onInputChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormError error={errors.password} />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="/users/new" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Box mt={5}>
                            <Copyright />
                            </Box> */}
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
