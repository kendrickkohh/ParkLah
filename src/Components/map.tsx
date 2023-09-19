import React, {
  useMemo,
  useCallback,
  useRef,
  useEffect,
  useState,
} from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import Places from "./places.tsx";
// import Distance from "./distance";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map() {
  const [userLocation, setUserLocation] = useState<LatLngLiteral>();
  const [carpark, setCarpark] = useState<LatLngLiteral>();
  const mapRef = useRef<GoogleMap>();

  // Remove default UI
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  //onLoad function
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  // generating random houses
  // const houses = useMemo(() => generateHouses(carpark), [carpark]);

  // Get current position
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

  return (
    <div className="map">
      <div className="maps-overlay-searchbar">
        <Places
          setCarpark={(position) => {
            setCarpark(position);
            mapRef.current?.panTo(position);
          }}
        />
      </div>

      <GoogleMap
        zoom={13}
        center={userLocation}
        mapContainerClassName="map-container"
        options={options}
        onLoad={onLoad}
      >
        {userLocation && <Marker position={userLocation} />}
        {carpark && (
          <>
            {/* icon={"/images/carparkIcon.svg"} */}
            <Marker position={carpark} />
            <Circle center={carpark} radius={200} options={closeOptions} />
            <Circle center={carpark} radius={400} options={middleOptions} />
            <Circle center={carpark} radius={600} options={farOptions} />
          </>
        )}
      </GoogleMap>
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};

// Generate random houses
// const generateHouses = (position: LatLngLiteral) => {
//   const _houses: Array<LatLngLiteral> = [];
//   for (let i = 0; i < 100; i++) {
//     const direction = Math.random() < 0.5 ? -2 : 2;
//     _houses.push({
//       lat: position.lat + Math.random() / direction,
//       lng: position.lng + Math.random() / direction,
//     });
//   }
//   return _houses;
// };
