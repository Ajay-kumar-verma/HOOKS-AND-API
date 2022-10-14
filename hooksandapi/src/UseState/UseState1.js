import React,{ useState} from 'react'

const UseState1 = () => {

const [Email,setEmail]=useState("");
const [Password,setPassword]=useState("");

const submit=(e)=>{ 
e.preventDefault();
    console.log("Data is :",{Email,Password})

    // unNessery rendering  on input change 
    // Better to use useRef here to increase react performance 
    
}

  console.log(" Component rendered ..!")  
  return (
    <form  onSubmit="return false" >
    <input type="text" value={Email} onChange={(e)=>{setEmail(e.target.value)}} /> 
    <input type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} /> 
    <button type="submit"  onClick={(e)=>{submit(e)}} >Login</button>
    </form>
    )
}

export default UseState1