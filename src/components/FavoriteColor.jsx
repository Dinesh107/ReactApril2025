import React from "react";
import { useState } from "react";
function FavoriteColor() {
//   let color = "Black";
  
      const [color, setColor] = useState("Black");
     
  return (
    <div>
      <h1>My Favorite Color is {color}</h1>
      <button
        onClick={() => {
          setColor("Blue")
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default FavoriteColor;
