import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Banner() {
    const [topRated,setTopRated]=useState([]);
    const [index,setIndex]=useState(0)
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`)
        .then((res)=>{
            setTopRated(res.data.results)
            // console.log(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    useEffect(()=>{
        let idx = Math.floor(Math.random() * 10);
        setIndex(idx);
    },[])

    let filmBackdrop=topRated.map((movie)=>{
        return movie.backdrop_path
    });
    let filmTitle=topRated.map((movie)=>{
        return movie.title
    })
    console.log(filmBackdrop)
    return (
        <div className='p-3'>
            <div className='h-[25vh] md:h-[75vh] bg-center bg-cover flex items-end justify-center' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${(filmBackdrop[index])}` }}>
                <h3 className='text-white text-2xl w-full text-center bg-gray-900/40'>{(filmTitle[index])}</h3>
            </div>
        </div>
    )
}

export default Banner