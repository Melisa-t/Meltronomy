import { PuffLoader } from "react-spinners";
import { getRecipeFromMistral } from "../ai";
import DOMPurify from "dompurify";
import { useState } from "react";

export default function RecipeBox({
  ingredients,
  setRecipe,
  recipe,
  setShowRecipe,
  showRecipe,
}) {
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  function Spinner() {
    const override = {
      display: "block",
      margin: "100px 0",
    };

    return (
      <div className="loading">
        <PuffLoader
          color="#8c1007"
          loading={spinnerLoading}
          cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  function toggleRecipe() {
    setShowRecipe(true);
  }
  async function handleGetRecipe(ingredients) {
    setShowRecipe(false);
    setSpinnerLoading(true);
    const newRecipe = await getRecipeFromMistral(ingredients);
    setSpinnerLoading(false);
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
          <Spinner></Spinner>
          {showRecipe && (
            <article className="generated-recipe" id="generated-recipe">
              <h2>Mel Chef Recommends:</h2>
              <div
                className="recipe"
                dangerouslySetInnerHTML={{ __html: recipe }}
              ></div>
            </article>
          )}
        </section>
      )}
    </>
  );
}
