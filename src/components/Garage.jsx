import React from "react";
import Car from "./Car";

function Garage() {
  // const brand = "honda";
  // const color = "Blue";
  // const carDetails = {
    // brand: "honda",
    // color: "Blue",
    // model: "city",
    // year: 2022,
  // };

  // const isDoorOpened = true;

  // const carCon =
  //   carDetails.brand !== undefined &&
  //   carDetails.color !== undefined &&
  //   carDetails.year !== undefined &&
  //   carDetails.model !== undefined;

  const carList = [
    {
      brand: "maruthi",
      color: "red",
    },
    {
      brand: "ford",
      color: "black",
    },
    {
      brand: "tata",
      color: "white",
    },
  ];
      
  return (
    //  <Car brand = {brand} color = 'red' />
    <>
      {/* { carCon ? <Car carDetails = {carDetails} /> : null} */}
      {/* { isDoorOpened ? <h2>Garage door is opened</h2> : <h2>Garage door is closed</h2> } */}
      {/* {carCon && <Car carDetails = {carDetails} />} */}

      <ul>
          { carList.map((carInfo, index) => <li key={index}> <Car carInfo={carInfo}/></li>) }
      </ul>
    </>
  );
}

export default Garage;
