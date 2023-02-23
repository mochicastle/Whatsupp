import React from "react"
import LogoBlue from "../assets/Images/LogoBlue.png"
import MyProject from "../assets/Images/MyProject.png"
import Button from '@mui/material/Button'
import { Container } from "@mui/material"
import Grid2 from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import CroppedNoodles2 from "../assets/Images/CroppedNoodles2.png"

const LandingPage = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <Container maxWidth="lg">
            <Grid2 container spacing={2}>
                <Grid2 xs={8}>
                    <img src={LogoBlue}/>
                    <Grid2 spacing={2}>
                        {/* <Grid2> */}
                            <Button variant="contained">Sign In</Button>
                        {/* </Grid2>
                        <Grid2> */}
                            <Button variant="contained">Sign Up</Button>
                        {/* </Grid2> */}
                    </Grid2>
                </Grid2>
                <Grid2 xs={4}>
                    <img src={CroppedNoodles2}/>
                </Grid2>
                {/* <Grid2 xs={4}>
                    <Item></Item>
                </Grid2> */}
                {/* <Grid2 xs={8}>
                    <Item>xs=8</Item>
                </Grid2> */}
            </Grid2>
        </Container>
    )
    // return (
    //     <div className= "grid-y grid-frame">
    //         <div className="grid-x grid-margin-x fluid">
    //             <div className="cell small-12 medium-4 large-4 medium-offset-1 large-offset-1 text-center">
    //             </div>
    //             <div className="cell small-12 medium-6 large-5 large-offset-1">
    //                 {/* <img src={MyProject}/> */}
    //                 <img src="https://via.placeholder.com/400"/>
    //             </div>
    //             <div>
    //                 
    //             </div>
    //         </div>
    //     </div>
    //   )
}

export default LandingPage