import React, { useEffect, useState } from "react";
import axios from "axios";

const DrinkRecipes = () => {
  const [drinksRecipes, setDrinksRecipes] = useState([]);

  useEffect(() => {
      console.log("this is the fetch for drinksRecipes data")
    axios
      .get(
        "https://assets.24g.com/public/2022-frontend-test-project/drinks.json"
      )
      .then((res) => {
        console.log("This is the drinksRecipes response:", res.data.drinks);
        setDrinksRecipes(res.data.drinks);
      })
      .catch((err) => {
        console.error("This is the drinksRecipes error:", err);
      });
  }, []);

  return <div></div>;
};

export default DrinkRecipes;
