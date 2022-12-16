import React from 'react'
import Logo from '../assets/nav-logo.png'
const Header = (props) => {
    // const hanldeChange=(e)=>{
    //     props.setTitle(e.target.value)
    // }
  return (
    <div className="flex flex-row justify-between w-[95vw] mx-auto my-3 border-b-2 border-white">
        <div>
            <img className="w-50 h-20 m-3"
            src={Logo} alt="Nav Logo" />
        </div>
        <div className="flex w-92 h-12 m-7 rounded-lg text-[#000] bg-white"> 
        <span className="p-3">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00000085" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
</svg>
        </span>
            <input 
            className="w-92 h-12 rounded-lg  outline-0 text-[#000] bg-transparent"
            type="text" 
            placeholder="Search for a movie" 
            value={props.title} 
            onChange={(e)=>props.setTitle(e.target.value)}/>
        </div>
    </div>
  )
}

export default Header