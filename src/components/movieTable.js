import React from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Like from './like'

const MovieTable = (props) => {
  const { movies, onDelete, onLike } = props

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Gebre</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Rate</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow
              key={movie._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {movie.title}
              </TableCell>
              <TableCell align="left">{movie.genre.name}</TableCell>
              <TableCell align="center">{movie.numberInStock}</TableCell>
              <TableCell align="center">{movie.dailyRentalRate}</TableCell>
              <TableCell>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => onDelete(movie._id)}
                >
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MovieTable
