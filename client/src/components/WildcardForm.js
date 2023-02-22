import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"

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
                setWildcard({
                    ...wildcard,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            },
            () => {
                setStatus("Unable to retrieve your location")
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
        <>
            <h1>What are you craving?</h1>
            
            <ErrorList errors={errors} />
           { status === null ? 
            <form onSubmit={handleSubmit}>
                <label>
                    Cuisine:  <input className="textBoxSizing"
                    typearea="text"
                    name="categories"
                    onChange={handleInputChange}
                    value={wildcard.categories}
                    />
                </label>
                <label>
                    Radius: within  <input className="radiusTextBoxSizing"
                    typearea="text"
                    name="radius"
                    onChange={handleInputChange}
                    value={wildcard.radius}
                    /> miles
                </label>
                <fieldset>
                    <legend>Price(s):</legend>
                        <input type="checkbox" id="option1" name="options" value="1" onChange={addToPriceArray}/>
                        <label htmlFor="option1">$</label>
                        <input type="checkbox" id="option2" name="options" value="2" onChange={addToPriceArray}/>
                        <label htmlFor="option2">$$</label>
                        <input type="checkbox" id="option3" name="options" value="3" onChange={addToPriceArray}/>
                        <label htmlFor="option3">$$$</label>
                        <input type="checkbox" id="option4" name="options" value="4" onChange={addToPriceArray}/> 
                        <label htmlFor="option4">$$$$</label>
                </fieldset>
                <div className="button-group">
                    <input className="button" type="submit" value="Submit" />
                </div>
            </form>
            :
            <h3>Status: {status}</h3>
            }
        </>
    )
}

export default WildcardForm