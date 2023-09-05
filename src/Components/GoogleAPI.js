import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const GoogleAPI = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <GoogleMap
        zoom={13}
        center={{ lat: 1.29027, lng: 103.851959 }}
        mapContainerStyle={{ width: "100%", height: "80%" }}
      >
        <Marker position={{ lat: 1.29027, lng: 103.851959 }} />
      </GoogleMap>
    </div>
  );
};

export default GoogleAPI;
