import Recipeitem from "./RecipeItem";


function RecipeList({ recipes }) {
  console.log("RECIPE LIST: ", recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      <div>
        {recipes &&
          recipes.map((recipe) => (
            <Recipeitem
            recipe ={recipe}
             key={recipe.id} />
          ))}
      </div>
    </div>
  );
}

export default RecipeList