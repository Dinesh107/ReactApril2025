import React, { useState } from 'react'

function Bike() {

//    const [color, setColor] = useState("Black");
//    const [brand, setBrand] = useState("TVS");
//    const [model, setModel] = useState("Jupiter");
//    const [year, setYear] = useState("2016");

    const [bike, setBike] = useState({
        color: "Black",
        brand: "TVS",
        model: "Jupiter",
        year: "2016",
    }); 

    function updateColor() {
        setBike((preState) => {
            return {
                ...preState, color: "Blue"
            }
        })
    }

   console.log("Current State:",  bike);
   

  return (
    <div>
        <h1>My Bike</h1>
        <p>Color: {bike.color}</p>
        <p>Brand: {bike.brand}</p>
        <p>Model: {bike.model}</p>
        <p>Year: {bike.year}</p>
        <button onClick={updateColor}>Change Color</button>
    </div>
  )
}

export default Bike

