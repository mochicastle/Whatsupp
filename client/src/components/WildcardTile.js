import React from "react"
import { Typography } from "@material-ui/core"
import AstroBurger from "../assets/Images/AstroBurger.png"

const WildcardTile = (props) => {   
    return (
        <div className="suggested-restaurant">
            <div className="r-container">
                <div className="two-col-grid">
                    <div className="content-wrapper">
                        <div className="Block1">
                            <h1 className="restaurant-header">You are having...</h1>
                            <h1 className="restaurant-name-header">{props.wildcardPick.name}</h1>
                            <p className="restaurant-details">{props.wildcardPick.street}, {props.wildcardPick.city}, {props.wildcardPick.state}</p>
                            <p className="restaurant-details">{props.wildcardPick.phone}</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <div className="Block2">
                            <img src={AstroBurger} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    // return (
    //     <Typography variant="body1">
    //         <h1>You're having {props.wildcardPick.name}!</h1>
    //         <p>{props.wildcardPick.street}, {props.wildcardPick.city}, {props.wildcardPick.state}</p>
    //         <p>{props.wildcardPick.phone}</p>
    //     </Typography>
    // )
}

export default WildcardTile