const CardModal = (props) => {
  return (
    <div className={`${!(props.open)? 'hidden' : 'flex min-w-screen min-h-screen bg-[#0004] z-50 border-2 border-white'} `}>
        <div className=" bg-white w-50 z-70">
            <h2>
                hiii
            </h2>
        </div>
    </div>
  )
}

export default CardModal