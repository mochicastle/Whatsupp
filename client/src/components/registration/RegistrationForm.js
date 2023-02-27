import React, { useState } from "react";
import FormError from "../layout/FormError";
import config from "../../config";
import ErrorList from "../layout/ErrorList";
import translateServerErrors from "../../services/translateServerErrors";

import { Avatar, Button, Container, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography, makeStyles } from "@material-ui/core"
import registrationStyles from "../../services/registrationStyles"
import madeWithLove from "../../services/madeWithLove"
import RegistrationLogo from "../../assets/Images/RegistrationLogo.png"

const RegistrationForm = () => {
  const classes = registrationStyles()

  const [userPayload, setUserPayload] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errors, setErrors] = useState({});

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const validateInput = (payload) => {
    setErrors({});
    const { username, email, password, passwordConfirmation } = payload;
    const emailRegexp = config.validation.email.regexp;
    let newErrors = {};

    if (username.trim() == "") {
      newErrors = {
        ...newErrors,
        username: "is required",
      };
    }

    if (!email.match(emailRegexp)) {
      newErrors = {
        ...newErrors,
        email: "is invalid",
      };
    }

    if (password.trim() == "") {
      newErrors = {
        ...newErrors,
        password: "is required",
      };
    }

    if (passwordConfirmation.trim() === "") {
      newErrors = {
        ...newErrors,
        passwordConfirmation: "is required",
      };
    } else {
      if (passwordConfirmation !== password) {
        newErrors = {
          ...newErrors,
          passwordConfirmation: "does not match password",
        };
      }
    }

    setErrors(newErrors);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    validateInput(userPayload);
    console.log(userPayload)
    try {
      if (Object.keys(errors).length === 0) {
        const response = await fetch("/api/v1/users", {
          method: "post",
          body: JSON.stringify(userPayload),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
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
        const userData = await response.json();
        setShouldRedirect(true);
      }
    } catch (err) {
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
    <Container component="main" maxWidth="xs" className="reg-form-styling">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={RegistrationLogo} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/* <ErrorList errors={errors} /> */}
        <form className={classes.form} onSubmit={onSubmit} noValidate >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value={userPayload.username}
            onChange={onInputChange}
            autoFocus
          />
          <FormError error={errors.username} />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={userPayload.email}
            onChange={onInputChange}
          />
          <FormError error={errors.email} />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={userPayload.password}
            onChange={onInputChange}
            autoComplete="current-password"
          />
          <FormError error={errors.passwordConfirmation} />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordConfirmation"
            label="Password Confirmation"
            type="password"
            value={userPayload.passwordConfirmation}
            onChange={onInputChange}
            />
            <FormError error={errors.password} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="/" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <madeWithLove />
      </Box>
    </Container>
  )
};

export default RegistrationForm;
