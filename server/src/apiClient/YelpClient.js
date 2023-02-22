import dotenv from "dotenv"
dotenv.config()

'use strict'
import _send from '@tonybadguy/call-me-maybe'

class YelpClient {

    constructor(options){
        this.apiKey = process.env.YELP_API_KEY
        this.options = {}
        
        if(typeof options !== 'undefined'){
          this.options = options
        }
    }
    
    send(requestOptions){
        const combinedOptions = Object.assign({}, requestOptions, this.options);
        return _send(combinedOptions);
    }

    search(wildcardData){
        return this.send({
          url: 'https://api.yelp.com/v3/businesses/search',
          query: wildcardData,
          bearerToken: this.apiKey
        })
    }
}

export default YelpClient
