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
} from "@react-google-maps/api";
import Places from "./places.tsx";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map({ carpark }) {
  const [userLocation, setUserLocation] = useState<LatLngLiteral>();
  const [destination, setDestination] = useState<LatLngLiteral>();
  const [directions, setDirections] = useState<DirectionsResult>();
  const [carparksFiltered, setCarparksFiltered] = useState<
    Array<LatLngLiteral>
  >([]);
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

  // Fetch positions, retrieve position of clicked icon
  const fetchDirections = (lat, lng) => {
    if (!destination) return;

    const service = new google.maps.DirectionsService();

    service.route(
      {
        origin: userLocation,
        destination: { lat: lat, lng: lng },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };

  const returnLatLong = (locationString) => {
    const coordinates = locationString.split(" ");
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    return [latitude, longitude];
  };

  const handleSearch = (carpark, position) => {
    let filteredCarparks: Array<LatLngLiteral> = [];

    carpark.forEach((item) => {
      const location = returnLatLong(item.Location);
      const latitude = parseFloat(location[0]);
      const longitude = parseFloat(location[1]);

      const distance = Math.sqrt(
        Math.pow(latitude - position.lat, 2) +
          Math.pow(longitude - position.lng, 2)
      );

      // Check if the distance is less than or equal to 0.006 (approx. 600m in a simplified context)
      if (distance <= 0.0054) {
        filteredCarparks.push({ lat: latitude, lng: longitude });
      }
    });

    return filteredCarparks;
  };

  return (
    <div className="map">
      <div className="maps-overlay-searchbar">
        <Places
          setDestination={(position) => {
            setDestination(position);
            setCarparksFiltered(handleSearch(carpark, position));
            mapRef.current?.panTo(position);
          }}
        />
      </div>

      <GoogleMap
        zoom={14}
        center={userLocation}
        mapContainerClassName="map-container"
        options={options}
        onLoad={onLoad}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                zIndex: 50,
                strokeColor: "#1976D2",
                strokeWeight: 5,
              },
            }}
          />
        )}
        {userLocation && <Marker position={userLocation} />}
        {destination && (
          <>
            <Marker position={destination} />
            {carparksFiltered.map((item) => {
              return (
                <Marker
                  // key={latitude}
                  position={{ lat: item.lat, lng: item.lng }}
                  icon={"/images/carparkIcon.svg"}
                  onClick={() => {
                    fetchDirections(item.lat, item.lng);
                  }}
                />
              );
            })}
            <Circle center={destination} radius={200} options={closeOptions} />
            <Circle center={destination} radius={400} options={middleOptions} />
            <Circle center={destination} radius={600} options={farOptions} />
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
