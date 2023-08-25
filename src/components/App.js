import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [ movies, setMovies] = useState([])

  async function displayMovie() {
    const response = await fetch(
      `https://omdbapi.com/?s=${searchInput}&apikey=d98b1a72`
    );
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search)
    
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
      <button onClick={displayMovie}>Search</button>
      <ul>
      {movies.map((movie)=><div><li>{movie.Title}</li><img src={movie.Poster}/></div>)}
      </ul>
      
    </div>
  );
};

export default App;
