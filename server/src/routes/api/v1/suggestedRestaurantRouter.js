//special thank you for Chelsea Smith and Michael Pekkarinen for the endless amount of energy they've spent on helping

import express from "express"

const suggestedRestaurantRouter = new express.Router()

suggestedRestaurantRouter.get("/", async (req, res) => {
    try {
        const user = req.user

        const favorites = await user.$relatedQuery("regulars")
        console.log(favorites)
        const randomIndex = Math.floor(Math.random() * favorites.length)
        console.log(randomIndex)
        console.log("favorites", favorites[randomIndex])
        const randomRestaurant = favorites[randomIndex].name
        console.log(randomRestaurant)
        return res.status(200).json({ randomRestaurant })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ errors: error})
    }
})

export default suggestedRestaurantRouter