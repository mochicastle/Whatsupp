//this method convert radius from miles to meters for Yelp

const radiusConversion = (radiusInMiles) => {
    if (radiusInMiles >= 25) {
        return 40000
    } else {
        return Math.round(radiusInMiles * 1609.34)
    }
}

export default radiusConversion