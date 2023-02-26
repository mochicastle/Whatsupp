import React from 'react'
import { Button, CssBaseline, Grid, Paper, Typography } from "@material-ui/core"
import menuStyles from '../services/menuStyles'
// import Spaghetti from '../assets/Images/Spaghetti.png'

const Menu = (props) => {
    const classes = menuStyles()
    return (
        <div className={classes.root}>
            <div className={classes.buttonContainer}>
                <Button className={classes.button} variant="contained" color="primary" onClick={() => location.href = '/suggested-restaurant'}>
                Pick from favorites
                </Button>
                <Button className={classes.button} variant="contained" color="secondary" onClick={() => location.href = '/wildcard'}>
                Pick a wildcard
                </Button>
            </div>
            {/* <img src={Spaghetti} alt="bottom left image" style={{ position: 'absolute', bottom: 0, left: 0, width: 200, height: 200 }} /> */}
      </div>
    )
}

export default Menu