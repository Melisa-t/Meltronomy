export default function IngredientsList({ ingredients }) {
  return (
    <>
      {ingredients.length === 0 && (
        <p className="instructions">
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
