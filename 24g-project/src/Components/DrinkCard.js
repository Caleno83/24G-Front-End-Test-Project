import React from "react";

const DrinkCard = ({ item }) => {
  return (
    <div className="images-front">
      <img src={item.images.front} alt="" />
    </div>
  );
};

export default DrinkCard;
