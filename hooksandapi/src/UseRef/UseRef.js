import React,{useRef , useEffect} from 'react'

const UseRef = () => {
 
const ref=useRef(null);


useEffect(()=>{
//    ref.current.innerHTML="Ajay kumar verma"
   ref.current.focus();
  
},[])


    return (
   <>
   
   <input ref={ref} type="text" />
   {/* <h1  ref={ref}> </h1> */}
   
   </>
    )
}

export default UseRef