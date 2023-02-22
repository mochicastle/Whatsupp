import React from "react"
import LogoBlue from "../assets/Images/LogoBlue.png"
import MyProject from "../assets/Images/MyProject.png"

const LandingPage = (props) => {
    return (
        <div classname= "grid-y grid-frame">
            <div className="grid-x grid-margin-x">
                <div className="cell small-2 large-offset-2">
                    <img src={LogoBlue}/>
                </div>
                <div className="cell small-6">
                    <img src={MyProject}/>
                </div>
            </div>
        </div>
      )
}

export default LandingPage