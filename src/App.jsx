import { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import NavBar from "./Components/NavBar";
import Watchlist from "./Components/Watchlist";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetail from "./Components/MovieDetail";
import { MovieContext } from "./Components/movieContext";
function App() {

  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchList = (movieObj) => {
    let updatedWatchlist = [...watchlist, movieObj]
    setWatchlist(updatedWatchlist)
    localStorage.setItem('movies', JSON.stringify(updatedWatchlist))
    // console.log(updatedWatchlist)
  }
  const DeleteFromWatchList = (movieObj) => {
    let filtredMovies = watchlist.filter((movie)=>{
     return movie.id != movieObj.id
    })

    setWatchlist(filtredMovies)
    localStorage.setItem('movies' , JSON.stringify(filtredMovies))
 };
  useEffect(() => {
    let localStorageWatchlistItem = localStorage.getItem('movies');
    if (!localStorageWatchlistItem) {
      return
    }
    setWatchlist(JSON.parse(localStorageWatchlistItem))

  }, []);

  return (
    <div style={{ backgroundColor: '#000000' }} className="p-5 pt-0">
      <BrowserRouter>
        <MovieContext.Provider value={{handleAddToWatchList,watchlist,setWatchlist,DeleteFromWatchList}}>
          <NavBar />
          <Routes>
            <Route path='/' element={<><Banner /> <Movies  /></>}></Route>
            <Route path='/movie-detail/:movieId' element={<MovieDetail />}></Route>
            <Route path='/watchlist' element={<Watchlist  />}></Route>
          </Routes>
        </MovieContext.Provider>

      </BrowserRouter>
    </div>
  )
}

export default App
