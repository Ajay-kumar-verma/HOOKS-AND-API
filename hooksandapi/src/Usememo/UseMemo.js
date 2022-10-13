import React, {useEffect,useState,useMemo} from 'react'

const UseMemo=()=>{
const [data,setData]=useState("");
const [count,setCount]=useState(0);


const norederingComponent=useMemo(()=>{
  
    return  <h6 style={{color:"red"}} >  Ajay kumar verma {data} {count} </h6>

},[count])


return (<>

 {norederingComponent}

<p>Count is : {count} </p>
<p>Data is : {data}</p>

<button onClick={()=>{setCount(prevState=>prevState+1)}}  > Count </button>
<button onClick={()=>{setData(prevState=>prevState+"A")}}  > Data </button>


</>)

}

export default UseMemo;



