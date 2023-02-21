import React from "react"

const WildcardTile = (props) => {    
    console.log("wildcard tile: ", props)
    return (
        <div>
            <h1>You're having {props.wildcardPick.name}!</h1>
            <p>{props.wildcardPick.street}, {props.wildcardPick.city}, {props.wildcardPick.state}</p>
            <p>{props.wildcardPick.phone}</p>
        </div>
    )
}

export default WildcardTile