import React, { useState } from "react";
import GoogleAPI from "./GoogleAPI";

const MapsOverlay = () => {
  const [selected, setSelected] = useState(0);
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

  return (
    <div className="maps-overlay-page">
      <div className="maps-overlay-searchbar">
        <div className="maps-overlay-searchbar-row">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <GoogleAPI />
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
                src={selected == item.index ? item.imageYellow : item.image}
                alt={item.title}
              />
              {selected == item.index ? (
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
