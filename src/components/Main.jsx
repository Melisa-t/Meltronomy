import { useState } from "react";

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

  function toggleRecipe() {
    setShowRecipe(!showRecipe);
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
            <button onClick={toggleRecipe}>
              {showRecipe ? "Hide me!" : "Show me!"}
            </button>
          </div>
          {showRecipe && (
            <article className="generated-recipe">
              <h2>Mel Chef Recommends:</h2>
              <article
                className="suggested-recipe-container"
                aria-live="polite"
              >
                <p>
                  Based on the ingredients you have available, I would recommend
                  making a simple a delicious{" "}
                  <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
                </p>
                <h3>Beef Bolognese Pasta</h3>
                <h3>Ingredients:</h3>
                <ul>
                  <li>1 lb. ground beef</li>
                  <li>1 onion, diced</li>
                  <li>3 cloves garlic, minced</li>
                  <li>2 tablespoons tomato paste</li>
                  <li>1 (28 oz) can crushed tomatoes</li>
                  <li>1 cup beef broth</li>
                  <li>1 teaspoon dried oregano</li>
                  <li>1 teaspoon dried basil</li>
                  <li>Salt and pepper to taste</li>
                  <li>
                    8 oz pasta of your choice (e.g., spaghetti, penne, or
                    linguine)
                  </li>
                </ul>
                <h3>Instructions:</h3>
                <ol>
                  <li>
                    Bring a large pot of salted water to a boil for the pasta.
                  </li>
                  <li>
                    In a large skillet or Dutch oven, cook the ground beef over
                    medium-high heat, breaking it up with a wooden spoon, until
                    browned and cooked through, about 5-7 minutes.
                  </li>
                  <li>
                    Add the diced onion and minced garlic to the skillet and
                    cook for 2-3 minutes, until the onion is translucent.
                  </li>
                  <li>Stir in the tomato paste and cook for 1 minute.</li>
                  <li>
                    Add the crushed tomatoes, beef broth, oregano, and basil.
                    Season with salt and pepper to taste.
                  </li>
                  <li>
                    Reduce the heat to low and let the sauce simmer for 15-20
                    minutes, stirring occasionally, to allow the flavors to
                    meld.
                  </li>
                  <li>
                    While the sauce is simmering, cook the pasta according to
                    the package instructions. Drain the pasta and return it to
                    the pot.
                  </li>
                  <li>
                    Add the Bolognese sauce to the cooked pasta and toss to
                    combine.
                  </li>
                  <li>
                    Serve hot, garnished with additional fresh basil or grated
                    Parmesan cheese if desired.
                  </li>
                </ol>
              </article>
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
