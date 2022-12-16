import { useState,useEffect } from 'react'
const CardModal = (props) => {
  const [movie,setMovie] = useState([])
  useEffect(() => {
    getMovieDetails(props.movieId)
  },[props.movieId])
  const getMovieDetails=async (id)=>{
    if(id){
      try{
        const response= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        const data= await response.json()
        setMovie(data)
      }
      catch(err){
        console.log(err)
      }
    }
  }
  const handleClick=()=>{
    props.setOpen(false)
  }
  return (
    <div className={`${!(props.open)? 'hidden' : 'fixed'} top-0 left-0 flex w-full min-h-screen bg-[#00000094] z-50 justify-center items-center`}>
        <div className="flex flex-col bg-white w-[45vw] min-h-[60vh] max-h-max z-100 p-5">
          { 
            (!movie)?
            <div className="text-[#000] text-center text-2xl">No data</div>
            :
            <>
            <nav className="flex flex-row justify-between mt-1 mb-3">
            <h2 className="text-[#000] font-extrabold text-xl">
              {movie.title}
            </h2>
            <button 
            className="text-[#000] text-xl font-extrabold "
            onClick={()=>handleClick()}>
            x
            </button>
            </nav>
            <div className="flex flex-row text-sm mt-1">
              <div className="basis-[50%]">
              <img
              className="h-[40vh] w-[85%] ml-1" 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} />
              </div>
              <div className="flex flex-col basis-[50%] text-[#000] justify-start">
                <h2>
                <strong className="font-extrabold">Release date: </strong>{movie.release_date}
                </h2>
                <h2 className="my-3">
                {movie.overview}
                </h2>
                <h2>
                <strong>{parseFloat(movie.vote_average).toFixed(1)}</strong> / 10 ({movie.vote_count} votes)
                </h2>
              </div>
            </div>
            </>
          }
        </div>
    </div>
  )
}

export default CardModal