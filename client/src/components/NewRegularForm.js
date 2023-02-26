import React, { useState } from "react"

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
                    <input className="textBoxSizing new-reg-form-textbox"
                        typearea="text"
                        name="name"
                        onChange={handleInputChange}
                        value={newRegular.name}
                    />
                </label>
                <br></br>
                <div className="button-group new-reg-form-button-group">
                    <input className="button new-reg-form-button text-center submit-button" type="submit" value="Submit" variant="contained" style={{backgroundColor: "#F3B516", color: "#000000", borderRadius: "10px", border: "1px solid #000000"}} onClick={handleSubmit} />
                </div>
                
            </form>
        </div>
    )
}

export default NewRegularForm