import React,{useEffect,useState} from 'react';

const UseEffect=()=>{

const [count,setCount]=useState(0);
const [data,setData] =useState("");

useEffect(()=>{
    console.log("Component render");
},[data,count])


return (<>


   <p>Count is :{count}</p>
   <p>data is :{data}</p>
    
   <button onClick={()=>{setCount((prevState=>prevState+1))}} > Count  </button>
   <button onClick={()=>{setData((prevState=>prevState+'A'))}} > Data  </button>
 
  <h1> this is useEffect {count} </h1>
  <h1> this is useEffect  {count}   </h1>
  <h1> this is useEffect   {count}  </h1>


</>)

}

export default UseEffect;
