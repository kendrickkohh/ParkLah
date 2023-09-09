import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const GoogleAPI = ({ filteredCarparks }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [userLocation, setUserLocation] = useState(null);
  // const [selectedGymId, setSelectedGymId] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <GoogleMap
      zoom={13}
      center={userLocation}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    >
      {filteredCarparks.map((item) => {
        return (
          <Marker
            position={{ lat: item.latitude, lng: item.longitude }}
            icon={{
              url: "./images/carparkpin.png",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            // onClick={() => {
            //   setSelectedGymId(item.id);
            // }}
          />
        );
      })}
      {userLocation && <Marker position={userLocation} />}
    </GoogleMap>
  );
};

export default GoogleAPI;
