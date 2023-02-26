import React from "react"
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography, makeStyles } from "@material-ui/core"
import Noodles1 from "../assets/Images/Noodles1.png"

const signInStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
    //   backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundImage: `url(${Noodles1})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
  }))

  export default signInStyles