import React from "react"
import { Box, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Noodles1 from '../assets/Images/Noodles1.png'

const RegularTile = (props) => {
  const { name } = props
  
  return (
    <Grid item xs={4}>  
         <Typography variant="h4" align="center">
            {name}
          </Typography>
          <img src={Noodles1} alt="Cartoon noodles" />
    </Grid>  
  )
}

export default RegularTile

{/* <Grid
container
direction="column"
alignItems="center"
spacing={2}
> */}