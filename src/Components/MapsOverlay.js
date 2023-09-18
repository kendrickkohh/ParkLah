import React, { useState } from "react";
import Map from "./map.tsx";
import { useJsApiLoader } from "@react-google-maps/api";

const MapsOverlay = ({ carpark }) => {
  const [selected, setSelected] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [filteredCarparks, setfilteredCarparks] = useState([]);
  const mapsObject = [
    {
      image: "/images/menuFinder.png",
      imageYellow: "/images/menuFinderYellow.png",
      title: "Finder",
      index: 0,
    },
    {
      image: "/images/menuGo.png",
      imageYellow: "/images/menuGoYellow.png",
      title: "Go",
      index: 1,
    },
    {
      image: "/images/menuSaved.png",
      imageYellow: "/images/menuSavedYellow.png",
      title: "Saved",
      index: 2,
    },
    {
      image: "/images/menuSearch.png",
      imageYellow: "/images/menuSearchYellow.png",
      title: "Search",
      index: 3,
    },
    {
      image: "/images/menuProfile.png",
      imageYellow: "/images/menuProfileYellow.png",
      title: "Profile",
      index: 4,
    },
  ];

  // load GoogleMaps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  // const handleSearch = () => {
  //   const filtered = carpark.filter((g) =>
  //     g.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setfilteredCarparks(filtered);
  // };

  return (
    <div className="maps-overlay-page">
      <div className="maps-overlay-maps">
        <Map></Map>
      </div>
      <div className="maps-overlay-navbar">
        {mapsObject.map((item) => {
          return (
            <div
              className="maps-overlay-navItem"
              onClick={() => {
                setSelected(item.index);
              }}
            >
              <img
                src={selected === item.index ? item.imageYellow : item.image}
                alt={item.title}
              />
              {selected === item.index ? (
                <h5 style={{ color: "#DBAB00" }}>{item.title}</h5>
              ) : (
                <h5>{item.title}</h5>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapsOverlay;
