import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {
  const params = useParams()
  const [movieDetail, setmovieDetail] = useState({})
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=0b5415eb9bf023d556ef265b425e0e4a`)
      .then(res => res.json())
      .then(data => setmovieDetail(data))
}, []);
return (
  <div className='details-container p-4 m-4'>
    <h1 className='text-white text-2xl p-4 m-4'>Movie Details</h1>
    <hr />
    <h2 className='text-white text-2xl w-full p-2 m-2'>{movieDetail.title}</h2>
    <img className='h-[20rem] w-[30rem] p-2 m-2 rounded-3xl' src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`} />
    <p className='text-white text-3xl w-full p-2 m-2'>{movieDetail.overview}</p>
  </div>
)
}
