const Buttons=({category,handleCategory})=>{

    return (
        <div className="body-btns">
        <button id={category==="Overview"?"selected":""} onClick={()=>handleCategory("Overview")}>Overview</button>
        <button id={category==="Other"?"selected":""} onClick={()=>handleCategory("Other")}>Other</button>
        </div>
    )
}

export default Buttons;