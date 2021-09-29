import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import MovieTable from './movieTable'
import { getMovies, deleteMovie } from '../data/fackMovieService'

export default function Movies() {
  const [movies, setMovies] = useState(getMovies())

  const handleDelete = movieId => {
    console.log(movieId)
    deleteMovie(movieId)
    const movies = getMovies()
    console.log('number of movies left: ', movies.length)
    setMovies(movies)
  }

  useEffect(() => {
    const movies = getMovies()
    setMovies(movies)
  }, [movies])

  const { length: count } = movies
  if (count===0) return <p>There are no movies in the database.</p>

  return (
    <React.Fragment>
      <Typography variant="h4" component="div" gutterBottom>
        Showing {count} movies in the database.
      </Typography>
      <MovieTable 
        movies={movies} 
        onDelete={handleDelete}
      />
    </React.Fragment>
  )
}
