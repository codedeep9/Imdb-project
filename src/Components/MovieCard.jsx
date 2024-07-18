import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MovieContext } from './movieContext';
function MovieCard({movieObject}) {
  let {watchlist,handleAddToWatchList,DeleteFromWatchList}=useContext(MovieContext);

  function doesPresentInWatchlist(){
    for(let i=0; i<watchlist.length; i++){
      if (watchlist[i].id===movieObject.id){
        return true
      }
    }
    return false
  }
  
  return (
    <div className='h-[40vh] w-[200px] bg-cover flex flex-col justify-between items-end rounded-lg hover:scale-110 transition duration-300' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movieObject.poster_path})`}}>
       {doesPresentInWatchlist(movieObject )?
       (<div display="flex justify-start h-[2rem] w-[2rem] ">
       <button onClick={()=>DeleteFromWatchList(movieObject)} className='p-2 bg-gray-900/30 rounded-xl m-2' >&#10060;</button>
     </div>)
     :(
      <div display="flex justify-start h-[2rem] w-[2rem]  ">
          <button className='p-2 bg-gray-900/30 rounded-xl m-2' onClick={()=>handleAddToWatchList(movieObject)}>&#x2764;</button>
        </div>
     )

      }
      <div className='text-white w-full text-center text-lg p-2 bg-gray-900/40'>
      <Link to={`/movie-detail/${movieObject.id}`}><h3 >{movieObject.title}</h3></Link>
      </div>
    </div>
  )
}

export default MovieCard