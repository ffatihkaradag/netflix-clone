import React, { useEffect, useState, forwardRef } from 'react'
import axios from '../axios'
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = forwardRef(({ title, fetchUrl, isLargeRow = false }, ref) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                ref={ref}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  )
})

export default Row
