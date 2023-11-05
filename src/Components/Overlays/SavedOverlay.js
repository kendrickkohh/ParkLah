import React from "react";
import Navbar from "../Navbar/Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Saved = ({ selected, setSelected, setShowPage }) => {
  const savedCarparks = [
    {
      title: "ION Orchard Carpark",
      finalDestination: "ION Orchard",
      price: "$1.80/h",
      index: 0,
    },
    {
      title: "Wisma Atria Carpark",
      finalDestination: "Wisma",
      price: "$2.80/h",
      index: 1,
    },
    {
      title: "Ngee Ann City Carpark",
      finalDestination: "Ngee Ann City",
      price: "$3.80/h",
      index: 2,
    },
    {
      title: "Wheelock Place Carpark",
      finalDestination: "Wheelock Place",
      price: "$4.80/h",
      index: 3,
    },
    {
      title: "NTU Carpark A",
      finalDestination: "North Spine",
      price: "$5.80/h",
      index: 4,
    },
  ];
  return (
    <div className="saved-overlay-page">
      <div className="page-header">
        <h3>Saved</h3>
      </div>
      <div className="saved-list">
        {savedCarparks.map((item, index) => {
          return (
            <div className="saved-list-item" key={index}>
              <div className="saved-list-item-a">
                <h3>{item.title}</h3>
                <p>Final Destination: {item.finalDestination}</p>
                <p>Price: {item.price}</p>
              </div>
              <div className="saved-list-item-b">
                <ArrowForwardIcon className="saved-arrow" />
              </div>
            </div>
          );
        })}
      </div>
      <Navbar
        selected={selected}
        setSelected={setSelected}
        setShowPage={setShowPage}
      />
    </div>
  );
};

export default Saved;