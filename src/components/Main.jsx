export default function Main() {
  return (
    <section className="main-section">
      <InputBox></InputBox>
      <RecipeBox></RecipeBox>
    </section>
  );
}

function InputBox() {
  return (
    <section className="input-section">
      <div className="input-box">
        <label>Ingredients at home</label>
        <input type="text" placeholder="e.g. oregano" />
      </div>
      <button>Add Ingredients</button>
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
