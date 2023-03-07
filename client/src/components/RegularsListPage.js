//This webpage /regulars/list renders a list of the user's regularly-frequented restaurants and allows the user to add, edit, or review a restaurant.

import React, { useState, useEffect } from "react"

import ErrorList from "./layout/ErrorList"
import translateServerErrors from "./../services/translateServerErrors"

import NewRegularForm from "./NewRegularForm"
import RegularTile from "./RegularTile"

const RegularsListPage = (props) => {
    
    // const [regulars, setRegulars] = useState([])

    const [errors, setErrors] = useState({})

    const getRegulars = async () => {
        try {
            const response = await fetch("/api/v1/regulars")
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const regularData = await response.json()
            setRegulars(regularData.regulars)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getRegulars()
    }, [])

    const addRegular = async (newRegularData) => {
        try {
            const response = await fetch("/api/v1/regulars", {
                method: "POST",
                headers: new Headers ({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(newRegularData)
            })
            if (!response.ok) {
                if (response.status === 422) {
                    const body = await response.json()
                    const newErrors = translateServerErrors(body.errors)
                    return setErrors(newErrors)
                } else {
                    const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw error
                }
            }
            const body = await response.json()
            getRegulars()
            setErrors([])
        } catch (err) {
            console.error(`Error in fetch: ${err.message}`);
        }
    }

    const regularTiles = regulars.map((regular) => {
        return (
            <RegularTile
                key={regular.id}
                id={regular.id}
                name={regular.name}
            />
        )
    })
    
    let form
    if (props.user) {
        form = <NewRegularForm addRegular={addRegular} />
    }

    return (
        <div className="f-container text-center">
            <h1 className="f-header">On Regular Rotation</h1>
            <ErrorList errors={errors} />
            <div className="text-center">
                <ul>{regularTiles}</ul>
            </div>
            {form}   
        </div>
    )
}

export default RegularsListPage
