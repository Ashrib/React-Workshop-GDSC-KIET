import React, { useEffect, useState  } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,multiply,incrementByAmount} from '../redux/counter/counterSlice'
import { setMovies } from '../redux/movie/movieSlice'
const Home = () => {

    const count = useSelector((state)=> state.counter.value)
    const movies = useSelector((state)=> state.movie.value)
    const dispatch = useDispatch()
  const [userGenre, setUserGenre] = useState('')
    const [toggle, setToggle] = useState(true)

    const getAllMovies = async()=>{
    try{
      let response = await fetch(`http://35.154.49.30:8080/movies`)
      response = await response.json();
      console.log(response)
      // setAllMovies(response)
      dispatch(setMovies(response));

    }
    catch(error){
      console.error(error)
    }
  }

  const getMoviesByGenre = async()=>{
    try{
      let response = await fetch(`http://35.154.49.30:8080/moviebygenre?genre=${userGenre}`)
      response = await response.json();
      console.log(response)
      dispatch(setMovies(response));

    }
    catch(error){
      console.error(error)
    }

  }

  useEffect(()=>{
    getAllMovies();

  },[toggle])


  return (
    <>
    <Navbar/>
    <div>This is Home Page</div>
    <br />
    <div>counter:{count} 
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    <button onClick={()=>dispatch(multiply())}>multiply</button>
    <button onClick={()=>dispatch(incrementByAmount(5))}>increment by 5</button>
    </div>


    <div className='movie_container'>
      <div>
      <h2>Movies </h2> 
      <div>
        <input type="text"  placeholder='search by genre'
        onChange={(e)=>setUserGenre(e.target.value)}
        />
        <button onClick={getMoviesByGenre}>search</button>
        <button onClick={()=> setToggle(!toggle)}>all</button>
      </div>
      </div>
      {(movies?.length>0)?
      
      movies?.map((movie) =>(
        <div>
          <span>{movie?.title}</span>
          <img src={movie?.poster} alt="moive poster" />
        </div>
      ))
      :
      <>no data</>
    }
    </div>

    
    </>
  )
}

export default Home