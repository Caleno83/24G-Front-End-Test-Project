import React, { useState } from "react";

const DrinkCard = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="images-front"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <img src={hover ? item.images.back : item.images.front} alt="drink recipes images" />
    </div>
  );
};

export default DrinkCard;
