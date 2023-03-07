import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { Button } from "@material-ui/core"
import FormError from "./layout/FormError"
import menuStyles from "../services/menuStyles"

const Menu = (props) => {
    console.log("Menu props: ", props)

    const classes = menuStyles()
    
    const [errors, setErrors] = useState({
        message: ""
    })

    const handleFavoritesSubmit = (event) => {
        event.preventDefault()
        let newErrors = {}
        if (!props.regulars) {
            newErrors = {
                ...newErrors,
                message: "Click 'Edit Favorites' in the top bar to add your favorite restaurants.",
              }
              return newErrors
        } else {
            return <Redirect to="/suggested-restaurant"/>
        }
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.buttonContainer}>
                {/* <Button className={classes.button} variant="contained" color="primary" onClick={() => location.href = '/suggested-restaurant'}> */}
                <Button className={classes.button} variant="contained" color="primary" onClick={handleFavoritesSubmit}>
                Pick from favorites
                </Button>
                <FormError error={errors.message} />
                <Button className={classes.button} variant="contained" color="secondary" onClick={() => location.href = '/wildcard'}>
                Pick a wildcard
                </Button>
            </div>
            {/* <img src={Spaghetti} alt="bottom left image" style={{ position: 'absolute', bottom: 0, left: 0, width: 200, height: 200 }} /> */}
      </div>
    )
}

export default Menu