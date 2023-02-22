import express from "express"

import YelpClient from "../../../apiClient/YelpClient.js"
import radiusConversion from "../../../services/radiusConversion.js"
import pickWildcard from "../../../services/pickWildcard.js"

const wildcardRouter = new express.Router()

wildcardRouter.get("/", async (req, res) => {

    const wildcardData = req.query
    const convertedRadius = radiusConversion(wildcardData.radius)
    let wildcard = {}
    wildcard = {
        ...wildcardData,
        radius: convertedRadius
    }

    try {
        const yelpClient = new YelpClient
        const restaurantsResponse = await yelpClient.search(wildcard)

        const restaurantsData = restaurantsResponse.jsonBody
        const wildcardPick = pickWildcard(restaurantsData.businesses)
        return res
            .set({ "Content-Type": "application/json" })
            .status(200)
            .json(wildcardPick)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ errors: error })
    }
})

export default wildcardRouter