const pickWildcard = (restaurantsArray) => {
    let wildcard = ""
    if (restaurantsArray.length > 1) {
        const randomIndex = Math.floor(Math.random() * restaurantsArray.length)
        wildcard = restaurantsArray[randomIndex]
    } else if (restaurantsArray.length === 1) {
        wildcard = restaurantsArray[0]
    } else {
        wildcard = "There are no restaurants meeting your criteria"
    }

    return wildcard
}

export default pickWildcard