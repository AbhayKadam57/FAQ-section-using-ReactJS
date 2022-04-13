import react,{useState} from "react";


function SingleQuestion(props) {

  

    const[show,setShow]= useState(false)


    return(

        <div className="box">
            <div className="flex">
                <h1>Q {props.title}</h1>
                
                    <button onClick={()=>setShow((show)=>!show)} className="btn">{show===false ? "+":"-"}</button>
               
            </div>
            <p>{show===false ? "": props.info}</p>
            
        </div>
    )


}

export default SingleQuestion;