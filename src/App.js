
import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from 'axios'


function App() {


  // to return multiple components we use round brackets
  /// to store the state of the search button
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  // TO ACCESS THE API WE NEED THESE TWO THINGS
  const APP_ID = 'db61932b';
  const APP_KEY = '5a8cb9851cb354702d0ee823529d1851'

  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    setRecipes(res.data.hits);
  }


  useEffect(async () => {
    getRecipes();

  }, []);

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }
  // to get the state in the search button
  const onSearchClick = () => {
    getRecipes();
  }
  return (
    <div className="App">


      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <div className="container">
        <Recipes recipes={recipes} />

      </div>
    </div>
  );
}

export default App;
