import React ,{useState,useCallback} from 'react'
import Children  from './Children'

const Parents = () => {
  console.log("Parent Component is rendered ..!");

  const [data,setData] =useState(0)
  const [data2,setData2] =useState(0)

  const count=()=>{
    //   console.log("Count function is called ..")
          setData(s=>s+1)
}

const count2=()=>{
    //   console.log("Count function is called ..")
          setData2(s=>s+2)
}


// if we are passing function to other component ,it get re calculated Each time it render 

const fun=useCallback(()=>{
  console.log("Fun functipn is called ..!");
},[data])

 return (
    <>
    <p> Count is : {data}</p>
    <p> Count 2  is : {data2}</p>
     
    <div>This is parent Component </div>
    <Children count={data} fun={fun} /> 

 <button onClick={()=>{count()}} > Count </button>
 <button onClick={()=>{count2()}} > Count 2</button>
  
    </>
  )
}

export default Parents