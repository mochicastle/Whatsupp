import React from "react"
import { Typography } from "@material-ui/core"

function madeWithLove() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Made with ❤️ by '}
        <Link color="inherit" href="https://www.linkedin.com/in/michelle-wahng">
          Michelle Wahng
        </Link>{' 2023'}
        {/* {new Date().getFullYear()} */}
        {'.'}
      </Typography>
    )
}

export default madeWithLove
