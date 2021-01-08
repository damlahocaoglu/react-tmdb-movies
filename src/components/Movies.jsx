import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MovieCard from "./MovieCard";
import MovieCardDetail from "./MovieCardDetail";


const API_KEY = "891bd8493da50156ff1c26f76e69ca34";

function Movies(props) {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    
    const handleForm = event => {
      event.preventDefault();
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
      fetch(URL)
        .then(response => response.json())
        .then(data => setMovies(data.results));

       
    };
  return (
    <div >       
        <div className="col-sm-12 mt-5 mb-5">
            <form>
            <div className="row">
                <div className="col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Film Ara"
                    name="query"
                    onChange={event => setQuery(event.target.value)}
                />
                </div>
                <div className="col">
                <button
                    onClick={handleForm}
                    type="submit"
                    className="btn btn-primary"
                >
                    Ara
                </button>
                </div>
            </div>
            </form>
        </div>
        <div className="row">
        {movies
            .filter(item => item.poster_path)
            .map(item => (
            <MovieCard key={item.id} movie={item} />
            ))}
        </div>
        <Route path="/movie/:movieID">
        <MovieCardDetail movies={movies} />
        </Route>
        
    </div>
  );
}

export default Movies;
