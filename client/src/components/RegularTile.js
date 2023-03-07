import React from "react"

const RegularTile = (props) => {
  const { name } = props
  
  return (
    <div>
      <p className="regular-tile-styling">{name}</p>
    </div> 
  )
}

export default RegularTile