export default function Main() {
  return (
    <section className="main-section">
      <InputBox></InputBox>
      <RecipeBox></RecipeBox>
    </section>
  );
}

function handleFormSubmit(FormData) {
  const ingredient = FormData.get("ingredient");
  if (!ingredient) return;
  console.log(ingredient);
}

function InputBox() {
  return (
    <section className="input-section">
      <form action={handleFormSubmit} className="input-box">
        <label>Ingredients at home</label>
        <input name="ingredient" type="text" placeholder="e.g. oregano" />
        <button>Add Ingredients</button>
      </form>
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
