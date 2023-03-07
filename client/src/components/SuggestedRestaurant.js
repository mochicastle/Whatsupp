import React, { useState, useEffect } from "react"
import AstroPizza from '../assets/Images/AstroPizza.png'

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

    return (
        <div className="suggested-restaurant">
            <div className="r-container">
                <div className="two-col-grid">
                    <div className="content-wrapper">
                        <div className="Block1">
                            <h1 className="restaurant-header">You are having...</h1>
                            <h1 className="restaurant-name-header">{suggestion.name}</h1>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <div className="Block2">
                            <img src={AstroPizza} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestedRestaurant

//big thank you to my cohort bff Chelsea Smith for helping me debug this code!!!