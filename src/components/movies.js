import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import MovieTable from './movieTable'
import { getMovies, deleteMovie } from '../data/fackMovieService'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    const movies = getMovies()
    setMovies(movies)
  }

  const handleDelete = (movieId) => {
    const newMovies = movies.filter((movie) => movieId !== movie._id)
    setMovies(newMovies)
    deleteMovie(movieId)
  }

  const handleLike = (movie) => {
    const newMovies = [...movies]
    const index = newMovies.indexOf(movie)
    newMovies[index] = { ...newMovies[index] }
    newMovies[index].liked = !newMovies[index].liked
    setMovies(newMovies)
  }

  const { length: count } = movies
  if (count === 0) return <p>There are no movies in the database.</p>

  return (
    <React.Fragment>
      <Typography variant="h4" component="div" gutterBottom>
        Showing {count} movies in the database.
      </Typography>
      <MovieTable movies={movies} onDelete={handleDelete} onLike={handleLike} />
    </React.Fragment>
  )
}

export default Movies
