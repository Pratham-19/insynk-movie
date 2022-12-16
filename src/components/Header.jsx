import React from 'react'

const Header = (props) => {
    // const hanldeChange=(e)=>{
    //     props.setTitle(e.target.value)
    // }
  return (
    <div className="flex flex-row justify-between w-[95vw] mx-auto my-3 border-b-2 border-white">
        <div>
            <img className="w-50 h-20 m-3"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" />
        </div>
        <div>
            <input 
            className="w-96 h-10 m-7 rounded-lg outline-0 text-[#000] p-3"
            type="text" 
            placeholder="Search for a movie" 
            value={props.title} 
            onChange={(e)=>props.setTitle(e.target.value)}/>
        </div>
    </div>
  )
}

export default Header