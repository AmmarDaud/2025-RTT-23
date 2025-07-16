import { useState, useEffect, use } from 'react'
import './App.css'
import RecipeList from './components/RecipesList';

function App() {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  // fetch recipes
  // useEffect(() => {}, []);

  // Runs on every render 
  useEffect(()=> {
    console.log("Always renders")
  })

  // Runs once (at the initial render)
  // useEffect(() => {
  //   fetch('https://dummyjson.com/recipes')
  //   .then(res => res.json())
  //   .then(data => setRecipes(data.recipes))    
  // }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      // handle loading and error
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://dummyjson.com/recipes')

        if (!res.ok) {
          throw new Error("Error fetching recipes data")
        }

        const data = await res.json();
        console.log(data);
        setRecipes(data.recipes);

      } catch (error) {
        console.log(error);
        setError(error.message)
      
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes()

    // return () => {
    //   console.log("Cleanup function")
    // }
  }, [])

  return (
    <>
     <h1>Recipes App</h1>

     {loading && <h1>loading recipes...</h1>}

     {error && <div>{error}</div>}

     { recipes && <RecipeList recipes={recipes}/>}
    </>
  )
}

export default App