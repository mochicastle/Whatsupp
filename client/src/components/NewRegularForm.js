import React, { useState } from "react"
import { Button, Grid } from "@material-ui/core"

const NewRegularForm = ({ addRegular }) => {
    const [newRegular, setNewRegular] = useState({
        name: ""
    })

    const handleInputChange = (event) => {
        setNewRegular({
            ...newRegular,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addRegular(newRegular)
        clearForm()
    }

    const clearForm = () => {
        setNewRegular({
            name: ""
        })
    }

    return (
        <div className="new-reg-form-grid-container">
            <form onSubmit={handleSubmit}>
                <label className="add-restaurant-styling">
                    Add a restaurant:
                    <input className="textBoxSizing new-reg-form-textbox text-center"
                        typearea="text"
                        name="name"
                        onChange={handleInputChange}
                        value={newRegular.name}
                    />
                </label>
                <br></br>
                {/* <div className="new-reg-form-button-group button-margin"> */}
                <div className="cell small-12 button-margin text-center">
                    <Button className="submit-button text-center" type="submit" value="Submit" variant="contained" style={{backgroundColor: "#F3B516", color: "#000000", borderRadius: "10px", border: "1px solid #000000"}} onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
                
            </form>
        </div>
    )
}

export default NewRegularForm