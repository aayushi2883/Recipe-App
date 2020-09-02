import React , {useEffect , useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from "./Recipe"

const App = () => {
  const APP_ID = "9545826d";
  const APP_KEY ="b45e2be3969b00109fa7fb8d97b672d4";

  const [recipes, setRecipes] = useState([]);

    const [counter, setcounter] = useState(0);

    const [search, setSearch] = useState("");
    const [query, setQuery ]= useState('chicken');

    useEffect(async () => {
       getRecipes();
    }, [query] );

    const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await  response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    }


    const updatesearch = e => {
      setSearch(e.target.value); 
    }
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }

  return(
    <div className="App">
    <h1>Hello</h1>
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updatesearch} />
      <button className="search-button" type="submit">
      Search
      </button>
    </form>
    <div className="recipes">
    {recipes.map(recipe =>(
      <Recipe
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image }
      ingredients={recipe.recipe.ingredients}
       />
    ))}
    </div>
    </div>
  );
}
export default App;
