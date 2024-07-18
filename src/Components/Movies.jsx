import React, { useContext, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios'
import Pagination from './Pagination';

function Movies() {
    const [moviesData,setmoviesData]=useState([]);
    const [pageNo,setpageNo]=useState(1);

    const handleLeft=()=>{
        if (pageNo===1){
            setpageNo(pageNo);
        }else{
            setpageNo(pageNo-1);
        }
    }
    const handleRight=()=>{
        setpageNo(pageNo+1);
    }
    useEffect(()=>{ 
     axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=a249aca91ddac7e5e5ef11bee672b768&language=en-US&page=${pageNo}`)
     .then((res)=>{
        // console.log(res.data.results)
        setmoviesData(res.data.results)
     })
     .catch((err)=>{
        console.log(err)
     })
    // console.log(moviesData)
    },[pageNo])
  return (
    <div>
        <div>
        <h1 className='text-2xl font-bold text-center m-5' style={{color:'#f8c800'}}>Trending Movies</h1>
        </div>
        {!moviesData.length && <p className='text-white text-2xl text-center p-4 m-4'>Loading...</p>}
        <div className='flex flex-wrap gap-6 justify-evenly'>
           { moviesData.map((movieObj)=>{
                return (<MovieCard  movieObject={movieObj} />)
            })};
        </div>
        <Pagination handleLeftFn={handleLeft} handleRightFn={handleRight} CurrPageNo={pageNo}/>
    </div>
    
  )
}

export default Movies