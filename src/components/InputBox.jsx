export default function InputBox({
  ingredients,
  setIngredients,
  setRecipe,
  setShowRecipe,
}) {
  function handleFormSubmit(FormData) {
    const ingredient = FormData.get("ingredient");
    if (!ingredient) return;
    setIngredients([...ingredients, ingredient]);
  }

  function resetAll() {
    setIngredients([]);
    setRecipe(` `);
    setShowRecipe(false);
  }

  return (
    <>
      <section className="input-section">
        <form action={handleFormSubmit} className="input-box">
          <input name="ingredient" type="text" placeholder="e.g. oregano" />
          <button>Add Ingredients</button>
          {ingredients.length > 0 && (
            <button onClick={resetAll} type="button">
              Reset
            </button>
          )}
        </form>
        <IngredientsList ingredients={ingredients}></IngredientsList>
      </section>
    </>
  );
}

function IngredientsList({ ingredients }) {
  return (
    <>
      {ingredients.length === 0 && (
        <p className="warning">
          If you want the input in any other language, just add your ingredients
          in the language.
          <br></br>
          Or anything else. Want a 300 calories snack? Type in "300 calories
          snack."
          <br></br>
          P.S: Since it's AI translating, foreign language is quite awful.
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
