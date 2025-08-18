import { useState } from "react";

export default function Main() {
  return (
    <section className="main-section">
      <InputBox></InputBox>
      <RecipeBox></RecipeBox>
    </section>
  );
}

function InputBox() {
  const [ingredients, setIngredients] = useState([]);
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

function RecipeBox() {
  return (
    <>
      <article className="recipe-box"></article>
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
