import React from "react"
import { Button, Grid, makeStyles } from "@material-ui/core"
import Spaghetti from "../assets/Images/Spaghetti.png"

const menuStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${Spaghetti})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
          alignItems: 'center',
        },
      },
      buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(5),
        },
      },
      button: {
        // width: 200,
        // height: 50,
        margin: theme.spacing(1),
        fontSize: '30px',
        padding: '10px 20px',
        borderRadius: '30px',
        alignItems: 'flex-right',
        border: '3px solid black',
        // transition: 'all 0.3s ease',
        '&:hover': {
          background: 'white',
          color: 'black',
          cursor: 'pointer',
        }
      },
}))

export default menuStyles