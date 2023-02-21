const wildcardRestaurants = async (wildcardData) => {
    let wildcardPick

    try {
        const response = await fetch(`/api/v1/wildcard?categories=${wildcardData.categories}&latitude=${wildcardData.latitude}&longitude=${wildcardData.longitude}&radius=${wildcardData.radius}&price=${wildcardData.price}&term=${wildcardData.term}&open_now=${wildcardData.open_now}`)
        if (!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw(error);
          }
          const wildcardRestaurant = await response.json()
          wildcardPick = wildcardRestaurant
          return wildcardPick
    } catch (error) {
        console.error(`Error in fetch: ${error.message}`)
    }
}

export default wildcardRestaurants