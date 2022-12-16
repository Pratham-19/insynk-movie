// import CardModal from './CardModal.jsx'
const Cards = (props) => {
    const handleClick=(id)=>{
        props.setMovieId(props.id)
        props.setOpenModal(true);
    }
  return (
    <div 
    className="relative flex flex-col w-56 cursor-pointer bg-[#fff] rounded-lg mr-5 my-5 shadow- 
    [0px_30px_18px_-8px_rgba(0, 0, 0, 0.1)] hover:scale-105" 
    onClick={()=>handleClick(props.id)} >
        <div className="basis-85/10">
            <img
            className="w-full rounded-t-lg h-60" 
            src={props.img} 
            alt="Movie Poster" />
        </div>
        <div className="basis-15/10 h-16 rounded-b-lg flex justify-center items-center ">
        <h2 className=" text-[#000] font-bold text-center p-1 ">
            {props.title}
        </h2>
        </div>
        <div className="absolute top-4 left-4 z-10 rounded-full bg-white text-[#000] p-1 border-2 border-black font-bold">
            <h2>{props.ratings}</h2>
        </div>
        {/* <CardModal open={openModal} setOpen={setOpenModal}/> */}
    </div>
  )
}

export default Cards