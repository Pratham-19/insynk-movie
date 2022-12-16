import { useState,useEffect} from 'react'
import Header from '../components/Header'
import Card from '../components/Cards'

const Index = () => {
  const [title,setTitle] = useState("")
  const getMovies=async (title)=>{
    let response
    // console.log(process.env.REACT_APP_API_KEY)
    if(!title){
      response= await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`)
    }
    else{
      response= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`)
    }
    const data= await response.json()
    console.log(data)
  }
  useEffect(() => {
    getMovies(title)
  },[title])
  return (
    <div>
      <Header title={title} setTitle={setTitle} change={getMovies}/>
      <div>
        <Card 
        // img={}
        // title={}
        // description={}
        // ratings={}
        />
        {title}
      </div>
    </div>
  )
}

export default Index