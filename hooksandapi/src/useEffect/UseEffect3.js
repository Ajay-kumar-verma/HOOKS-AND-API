import React ,{useEffect} from 'react'

const UseEffect3 = () => {
    const [data,setData]=useState("");
    const [error,setError]=useState("");
    const [loading,setLoading]=useState("");
 
 const url = "www.calback.com";

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
    <div>UseEffect3</div>
  )
}

export default UseEffect3 ;
