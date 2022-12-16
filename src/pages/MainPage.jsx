import { useState,useEffect} from 'react'
import Header from '../components/Header'
import Card from '../components/Cards'
import CardModal from '../components/CardModal'

const Index = () => {
  const [title,setTitle] = useState("")
  const [movies,setMovies] = useState([])
  const [openModal,setOpenModal] = useState("false")
  const getMovies=async (title)=>{
    let response
    if(!title){
      response= await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`)
    }
    else{
      response= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`)
    }
    const data= await response.json()
    setMovies(data.results)
  }
  useEffect(() => {
    getMovies(title)
  },[title])
  return (
    <div>
      <Header title={title} setTitle={setTitle} change={getMovies}/>
      <div>
      <div className="flex justify-center flex-wrap items-center ">
        {
          movies.map((movie)=>{
            return(
              
                <Card 
                openModal={openModal} 
                setOpenModal={setOpenModal} 
                key={movie.id}
                id={movie.id}
                // img={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                ratings={movie.vote_average}
                />
                )
              })
            }
        </div>
      </div>
      <CardModal 
      open={openModal} 
      setOpen={setOpenModal} 
      // movieId={movieId}
      />
    </div>
  )
}

export default Index