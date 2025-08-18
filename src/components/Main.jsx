import { useState } from "react";
import { getRecipeFromMistral } from "../ai";
import DOMPurify from "dompurify";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  return (
    <section className="main-section">
      <InputBox
        ingredients={ingredients}
        setIngredients={setIngredients}
      ></InputBox>
      <RecipeBox ingredients={ingredients}></RecipeBox>
    </section>
  );
}

function InputBox({ ingredients, setIngredients }) {
  function handleFormSubmit(FormData) {
    const ingredient = FormData.get("ingredient");
    if (!ingredient) return;
    setIngredients([...ingredients, ingredient]);
  }

  return (
    <section className="input-section">
      <form action={handleFormSubmit} className="input-box">
        <input name="ingredient" type="text" placeholder="e.g. oregano" />
        <button>Add Ingredients</button>
      </form>
      <IngredientsList ingredients={ingredients}></IngredientsList>
    </section>
  );
}

function RecipeBox({ ingredients }) {
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipe, setRecipe] = useState(` `);

  function toggleRecipe() {
    setShowRecipe(true);
  }
  async function handleGetRecipe(ingredients) {
    const newRecipe = await getRecipeFromMistral(ingredients);
    console.log(newRecipe);
    setRecipe(DOMPurify.sanitize(newRecipe));
    toggleRecipe();
  }

  return (
    <>
      {ingredients.length >= 3 && (
        <section className="recipe-box">
          <div className="get-recipe-box">
            <p>
              Ready to get your recipe?
              <br></br>
              Clickity click!
            </p>
            <button onClick={() => handleGetRecipe(ingredients)}>
              Show me!
            </button>
          </div>
          {showRecipe && (
            <article className="generated-recipe">
              <h2>Mel Chef Recommends:</h2>
              <div
                className="recipe-box"
                dangerouslySetInnerHTML={{ __html: recipe }}
              ></div>
            </article>
          )}
        </section>
      )}
    </>
  );
}

function IngredientsList({ ingredients }) {
  return (
    <>
      {ingredients.length === 0 && (
        <p className="instructions">
          If you want the input in any other language, add your language as an
          ingredient. Because why not?
        </p>
      )}

      {ingredients.length > 0 && (
        <section className="ingredients-list">
          <h2 className="heading-secondary">Ingredients you have:</h2>
          <ul className="ingredients">
            {ingredients.length > 0 &&
              ingredients.map((ing) => <li key={ing}>{ing}</li>)}
          </ul>
        </section>
      )}
    </>
  );
}
