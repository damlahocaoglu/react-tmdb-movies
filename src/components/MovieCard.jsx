import React, { useState, Fragment } from "react"
import {Link} from "react-router-dom"

function MovieCard(props) {
  const {id, title, poster_path, overview} = props.movie
  return (
    <div className="col-sm-3 mb-4">
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{overview.substring(0, 50)}..</p>
        <Link to={`/movie/${id}`} className="btn btn-primary">Detay</Link>
      </div>
    </div>
    </div>
  )
}


export default MovieCard;