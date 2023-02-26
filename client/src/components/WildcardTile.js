import React from "react"
import { Typography } from "@material-ui/core"

const WildcardTile = (props) => {    
    return (
        <Typography variant="body1">
            <h1>You're having {props.wildcardPick.name}!</h1>
            <p>{props.wildcardPick.street}, {props.wildcardPick.city}, {props.wildcardPick.state}</p>
            <p>{props.wildcardPick.phone}</p>
        </Typography>
    )
}

export default WildcardTile