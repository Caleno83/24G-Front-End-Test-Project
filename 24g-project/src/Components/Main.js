import React from "react";
import DrinkRecipes from "./DrinkRecipes";

const Main = () => {
  return (
    <main>
      <h1>Welcome Holiday Text</h1>
      <section className="subtitle">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          odio ac ante malesuada feugiat. Mauris pretium, nulla ac imperdiet
          suscipit, nibh enim pellentesque sapien, ut hendrerit dolor sapien
          gravida lacus.
        </p>
      </section>
      <section className="recipes-images" >
        <DrinkRecipes />
      </section>
    </main>
  );
};

export default Main;
