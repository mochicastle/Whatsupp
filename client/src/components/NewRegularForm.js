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
                <label>
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
                    <input className="button new-reg-form-button" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default NewRegularForm