import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { Button, Grid, CircularProgress } from "@material-ui/core"
import AstroTyping from "../assets/Images/AstroTyping.png"

import ErrorList from "./layout/ErrorList"

import wildcardRestaurants from "../services/wildcardRestaurants"
import WildcardTile from "./WildcardTile"

const WildcardForm = (props) => {
    const [wildcard, setWildcard] = useState({
        categories: "",
        latitude: "",
        longitude: "",
        radius: "",     //Yelp uses meters, not miles
        price: [],
        term: "restaurants",     //Yelp search parameter, will not change
        open_now: true          //Yelp search parameter, will not change
    })

    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState("")
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const handleInputChange = (event) => {
        setWildcard({
          ...wildcard,
          [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus("Geolocation is not supported by your browser")
        } else {
            setStatus("Loading your location...")
            navigator.geolocation.getCurrentPosition(
            (position) => {
                setStatus(null)
                setIsLoading(false)
                setWildcard({
                    ...wildcard,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            },
            () => {
                setStatus("Unable to retrieve your location")
                setIsLoading(false)
            }
            )
        }
    }
    
    useEffect(() => {
     getLocation()
    }, [])

    const addToPriceArray = (event) => {
        const priceValue = event.currentTarget.value
        if(!wildcard.price.includes(priceValue)){
            setWildcard({
                ...wildcard,
                price: [...wildcard.price, priceValue]
            })
        } else {
            setWildcard({
                ...wildcard,
                price: wildcard.price.filter((priceElement) => {
                return priceElement !== priceValue
                })
            })
        }
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(validateUserInput()) {
            const yelpWildcard = await wildcardRestaurants(wildcard)
            props.updateWildcardPick(yelpWildcard)
            clearForm()
            setShouldRedirect(true)
        }
    }

    const validateUserInput = () => {
        let validationErrors = {}
        let hasErrors = false

        if (!wildcard.categories) {
            validationErrors["categories"] = "Please enter a cuisine."
            hasErrors = true
        }
      
        if (!wildcard.radius) {
            validationErrors["radius"] = "Please enter a radius."
            hasErrors = true
        }
      
        if (wildcard.price.length === 0) {
            validationErrors["price"] = "Please select at least one price option."
            hasErrors = true
        }
        
        setErrors(validationErrors)
        return !hasErrors
    }

    const clearForm = () => {
        setWildcard({
            categories: "",
            latitude: "",
            longitude: "",
            radius: "",     //1609 = meters, equivalent to 1 mile
            price: []
        })
        document.querySelectorAll('input[name="options"]').forEach((checkbox) => {
            checkbox.checked = false
        })
        setErrors({})
    }

    if (shouldRedirect) {
        return <Redirect to="/wildcard/pick"/>
    }

    const wildcardTileComponent = wildcardPick => {
        return (
            <WildcardTile
                wildcardPick={wildcardPick}
            />
        )
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <img src={AstroTyping} alt="Cartoon astronaut typing" />
            </Grid>
                <Grid item xs={12} sm={6} className="text-center">
                    <h1 className="wildcard-header">What are you craving?</h1>
                    <ErrorList errors={errors} />
                    { isLoading ? (
                            <CircularProgress size={24} />
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="grid-x  grid-margin-x"> 
                                <div className="cell small-12">
                                    <label htmlFor="cuisine" className="wildcard-font text-center">Cuisine:
                                        <input className="cuisineTextBoxSizing centered-input"
                                            typearea="text"
                                            id="cuisine"
                                            name="categories"
                                            onChange={handleInputChange}
                                            value={wildcard.categories}
                                            required />
                                        <span className="input-group-pill" />
                                    </label>
                                </div>
                            </div>
                            <div className="cell small-12">
                                <label htmlFor="radius" className="wildcard-font distance-margin text-center">Distance: within
                                    <input className="radiusTextBoxSizing centered-input"
                                    typearea="text"
                                    name="radius"
                                    onChange={handleInputChange}
                                    value={wildcard.radius}
                                    /> miles
                                </label>
                            </div>
                            <div className="cell small-12">
                                <fieldset className="price-margin text-center">
                                    <legend>Price(s):
                                        <input className="checkbox-margin" type="checkbox" id="option1" name="options" value="1" onChange={addToPriceArray}/>
                                        <label htmlFor="option1" className="wildcard-font">$</label>
                                        <input type="checkbox" id="option2" name="options" value="2" onChange={addToPriceArray}/>
                                        <label htmlFor="option2" className="wildcard-font">$$</label>
                                        <input type="checkbox" id="option3" name="options" value="3" onChange={addToPriceArray}/>
                                        <label htmlFor="option3" className="wildcard-font">$$$</label>
                                        <input type="checkbox" id="option4" name="options" value="4" onChange={addToPriceArray}/> 
                                        <label htmlFor="option4" className="wildcard-font">$$$$</label>
                                    </legend>
                                </fieldset>
                            </div>
                            <div className="cell small-12 button-margin text-center">
                                <Button className="submit-button text-center" type="Submit" value="Submit" variant="contained" style={{backgroundColor: "#F3B516", color: "#000000", borderRadius: "10px", border: "1px solid #000000"}} onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </Grid>
        </Grid>
    )
}

export default WildcardForm