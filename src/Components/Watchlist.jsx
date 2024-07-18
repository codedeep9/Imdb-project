
import React, { useContext, useEffect, useState } from 'react';
import genreids from '../utility/Genre';
import { MovieContext } from './movieContext';

function Watchlist() {
  const {watchlist,setWatchlist,DeleteFromWatchList}=useContext(MovieContext);
  const [searchItem, setSearchItem] = useState('');
  const [genreData, setGenreData] = useState([]);
  const [currGenre, setCurrGenre] = useState('All Genres');

  const handleSearchFn = (e) => {
    setSearchItem(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {
    let temp = watchlist.map((movie) => {
      return genreids[movie.genre_ids[0]];
    })
    temp = new Set(temp);
    let updatedTemp=['All Genres', ...temp]
    setGenreData(updatedTemp);
  }, [watchlist]);
 
  const handleAscendingRatings=()=>{
    let ascendingRatings=watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average-movieB.vote_average
    })
    setWatchlist([...ascendingRatings])
  }
  const handleDescendingRatings=()=>{
    let descendingRatings=watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average-movieA.vote_average
    })
    setWatchlist([...descendingRatings])
  }

  const handleFilter = (genre) => {
    setCurrGenre(genre)
  }


  return (
    <div className='watchlistContainer'>
      {/* {Genre based folter */}
      <div className="filterComponent flex justify-center">
        {genreData.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? 'filterIcon m-4 flex justify-center items-center  text-lg bg-blue-400 h-[2.5rem] w-[8rem] p-2 text-center rounded-lg'
                  : 'filterIcon m-4 flex justify-center items-center  text-lg bg-gray-400/50 h-[2.5rem] w-[8rem] p-2 text-center rounded-lg'}>
              {genre}
            </div>
          )
        })}


      </div>
      {/* search field */}


      <div className="flex justify-center my-4">
        <input className='bg-gray-50 px-3 rounded-md h-[2rem] w-[12rem] outline-none border border-slate-600' type='text' placeholder='Search for Movies' value={searchItem} onChange={handleSearchFn} />
      </div>
      {/* table watchlist */}
      <div className='my-5 '>
        <table className='min-w-full text-center '>
          <thead className='py-3 text-white border-collapse'>
            <tr>
              <th>Movie Name</th>
              <th><i onClick={handleAscendingRatings} class="fa-solid fa-arrow-up"></i> Ratings <i onClick={handleDescendingRatings} class="fa-solid fa-arrow-down"></i></th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='text-gray-600 text-lg  font-sans font-medium'>
            {
              // Here i'm implementing method Chaining..
              watchlist.filter((movie) => {
                if (currGenre == 'All Genres') {
                  return true
                }
                else { 
                  return genreids[movie.genre_ids[0]] == currGenre
                }
              }).filter((movie) => {
                return (movie.title.toLowerCase().includes(searchItem.toLowerCase()))
              }).map((movie) => {
                return (
                  <tr >
                    <td className='flex items-center'>
                      <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                      <div className='mx-10'>
                        <h3 className='watchlistTitle'>{movie.title}</h3>
                      </div>
                    </td>
                    <td>
                      {movie.vote_average}
                    </td>
                    <td>
                      {movie.popularity}
                    </td>
                    <td>
                      {genreids[movie.genre_ids[0]]}
                    </td>
                    <td onClick={()=>DeleteFromWatchList(movie)} className='text-red-500'>Delete</td>

                  </tr>

                )
              })
            }


          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Watchlist