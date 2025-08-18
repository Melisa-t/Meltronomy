import { useState } from "react";
import InputBox from "./InputBox.jsx";
import RecipeBox from "./RecipeBox.jsx";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(` `);
  const [showRecipe, setShowRecipe] = useState(false);

  return (
    <section className="main-section">
      <InputBox
        ingredients={ingredients}
        setIngredients={setIngredients}
        setRecipe={setRecipe}
        setShowRecipe={setShowRecipe}
      ></InputBox>
      <RecipeBox
        ingredients={ingredients}
        setRecipe={setRecipe}
        recipe={recipe}
        setShowRecipe={setShowRecipe}
        showRecipe={showRecipe}
      ></RecipeBox>
    </section>
  );
}
