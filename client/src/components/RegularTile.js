import React from "react"
import { Box, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const RegularTile = (props) => {
  const { name } = props
  
  return (
    <div>
      <p className="regular-tile-styling">{name}</p>
    </div> 
  )
}

export default RegularTile

{/* <Grid
container
direction="column"
alignItems="center"
spacing={2}
> */}