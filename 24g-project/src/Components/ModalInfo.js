import React from "react";

const ModalInfo = ({ item }) => {
  return (
    <div className="card">
      <h1>{item.name}</h1>
      <div className="info">
        <ul className="circle">
          <p>Ingredients</p>
          <li>{item.ingredients[0]}</li>
          <li>{item.ingredients[1]}</li>
          <li>{item.ingredients[2]}</li>
          <li>{item.ingredients[3]}</li>
          <li>{item.ingredients[4]}</li>
        </ul>
        <hr className="rounded"></hr>
        <ul className="style-1">
          <p>How to prepare</p>
          <li>STEP 1 {item.steps[0]}</li>
          <li>STEP 2 {item.steps[1]}</li>
          <li>STEP 3 {item.steps[2]}</li>
        </ul>
        <hr className="rounded"></hr>
        <ul className="style-2">
          <p>Make it a mocktail</p>
          <li>{item.mocktail}</li>
        </ul>
        <hr className="rounded"></hr>
        <ul className="style-3">
          <p>Glass recommendation</p>
          <li>{item.glassware}</li>
        </ul>
      </div>
    </div>
  );
};

export default ModalInfo;
