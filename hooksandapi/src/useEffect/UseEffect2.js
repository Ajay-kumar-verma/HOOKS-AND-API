import React,{useEffect,useState} from 'react'

const UseEffect2 = () => {
const [data,setData]=useState("");
const [error,setError]=useState("");
const [loading,setLoading]=useState("");


  useEffect(()=>{
  const controller=new AbortController();
    setLoading(true);
     fetch(url,{signal:controller.signal})
    .then(setData)
    .catch(setError)
    .finally(()=>{setLoading(false);})
    
    return ()=>{
        controller.abort();
    }

},[url])

 
    return (
    <>
     Hello Api 

    </>
  )
}

export default UseEffect2