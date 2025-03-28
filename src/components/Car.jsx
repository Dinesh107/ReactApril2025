import React from "react";

function Car(props) {
  // const {brand, color} = props;

  const {carInfo} = props;
  const { brand, color, year, model } = carInfo;

  const text = `Hai, i am a ${color} ${brand} ${model} Car and i am ${year} year made`;

  return (
    <>
      <h2>Hi, Welcome to React</h2>
      <p>Hai i am car component</p>
      <h2>{text}</h2>
    </>
  );
}

export default Car;
