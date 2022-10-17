import React,{ useState,useEffect,useMemo} from 'react'

const UseState1 = () => {

const [Email,setEmail]=useState("");
const [Password,setPassword]=useState("");
const [count,setCount]=useState(0); 
// Avoid component updating as much as possible

// when component is rendered ,data gets reInitialised ,because it an Object ,it valid for string not for object
// for avoiding this we use useMemo



const data=useMemo(()=>{
   return {Email,Password};
},[Email,Password]);


// Instead of using below approach we can use above approach
// const [data,setData]=useState({});
// useEffect(()=>{
// setData({Email,Password})
// },[Email,Password])

useEffect(()=>{
console.log("data is ",data);
},[data])



const submit=(e)=>{ 
e.preventDefault();
    console.log("Data is :",data)

    // unNessery rendering  on input change 
    // Better to use useRef here to increase react performance 

}

  console.log(" Component rendered ..!")  
  return (
    <form  onSubmit="return false" >
    <input type="text" value={Email} onChange={(e)=>{setEmail(e.target.value)}} /> 
    <input type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} /> 
    <button type="submit"  onClick={(e)=>{submit(e)}} >Login</button>
     <p onClick={()=>{setCount(p=>++p)}}>Count</p>
     {count}
    </form>
    )
}

export default UseState1