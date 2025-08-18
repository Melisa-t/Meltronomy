import IngredientsList from "./IngredientsList.jsx";

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
