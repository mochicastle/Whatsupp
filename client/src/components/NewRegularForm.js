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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add a restaurant:
                    <input
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                        value={newRegular.name} 
                    />
                </label>
                <div className="button-group">
                    <input className="button" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default NewRegularForm