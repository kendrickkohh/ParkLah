import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const GoogleAPI = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        
    });
    if(!isLoaded){
        return <h1>Loading...</h1>;
    }

    return(
        <GoogleMap zoom={10} center={{lat:44, lng:-80}} mapContainerStyle={{width:'100%', height:'100%'}}>

        </GoogleMap>
    ) 
}

export default GoogleAPI