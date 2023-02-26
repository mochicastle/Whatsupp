import React, { useState, useEffect } from "react"
import { Box, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Noodles1 from '../assets/Images/Noodles1.png'

const SuggestedRestaurant = (props) => {
    const [suggestion, setSuggestion] = useState({
        name: ""
    })

    const randomRestaurant = async () => {
        try {
            const response = await fetch(`/api/v1/suggested-restaurant`, {
                method: "GET",
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const body = await response.json()
            setSuggestion({
                name: body.randomRestaurant
            })
            
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }
    
    useEffect(() => {
        randomRestaurant()
    }, [])

    // return (
    //     <div>
    //         <h1>You're having {suggestion.name}!</h1>
    //     </div>
    // )

    return (
        <Grid item xs={4}>  
             <Typography variant="h4" align="center">
                You're having {suggestion.name}!
              </Typography>
              <img src={Noodles1} alt="Cartoon noodles" />
        </Grid>  
      )
}

export default SuggestedRestaurant

//big thank you to my cohort bff Chelsea Smith for helping me debug this code!!!