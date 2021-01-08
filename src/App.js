import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter , Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import MovieCardDetail from "./components/MovieCardDetail";
import "./App.css";

const API_KEY = '891bd8493da50156ff1c26f76e69ca34';


function App() {
  
  const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getMovies(POPULAR_API);
  }, []);
  const getMovies = API => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  };

  const handleOnChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    
    <BrowserRouter>
      <div className="container mt-5">
        <div className="row">
        <Header />
        <Movies />
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
