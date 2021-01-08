import React, { useState, useEffect } from 'react'
import {Link, useParams} from "react-router-dom"

function MovieCardDetail(props) {
  const {movies} = props
  const [movie, setMovie] = useState([])
  const params = useParams()
  
  useEffect(() => {
    setMovie(
      movies.filter(item => Number(item.id) === Number(params.movieID))[0]
    )
    
  }, [])
  
  return (
    <div className="col-sm-6 offset-sm-3">
      <nav aria-label="breadcrumb" className="mb-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Anasayfa</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{movie.title}</li>
        </ol>
      </nav>
      <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
        <h1>{movie.title}</h1>
        <h4>{movie.overview}</h4>
        <h4>{movie.vote_average}</h4>
      </div>
    </div>
  )
}

export default MovieCardDetail;