import React from "react";

const Navbar = ({ selected, setSelected, setShowPage }) => {
  const mapsObject = [
    {
      image: "/images/menuFinder.png",
      imageYellow: "/images/menuFinderYellow.png",
      title: "Finder",
      index: 2,
    },
    {
      image: "/images/menuSaved.png",
      imageYellow: "/images/menuSavedYellow.png",
      title: "Saved",
      index: 3,
    },
    {
      image: "/images/menuSearch.png",
      imageYellow: "/images/menuSearchYellow.png",
      title: "Search",
      index: 4,
    },
    {
      image: "/images/menuProfile.png",
      imageYellow: "/images/menuProfileYellow.png",
      title: "Profile",
      index: 5,
    },
  ];
  return (
    <div className="maps-overlay-navbar">
      {mapsObject.map((item) => {
        return (
          <div
            className="maps-overlay-navItem"
            onClick={() => {
              setSelected(item.index);
              setShowPage(item.index);
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
  );
};

export default Navbar;
