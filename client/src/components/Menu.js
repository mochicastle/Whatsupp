// home menu gives the following choices:
// -- pick from your regulars
// -- pick a wildcard 

import React from "react"

const Menu = (props) => {
    return (
        <>
        <button onClick={() => location.href = '/suggested-restaurant'}>Pick from favorites</button>
        <br></br>
        <button onClick={() => location.href = '/wildcard'}>Pick a wildcard</button>
        </>
    )
}

export default Menu