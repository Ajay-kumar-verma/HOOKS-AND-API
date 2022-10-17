import React, {useEffect,useLayoutEffect, useState,useRef} from 'react'

const UseLayoutEffect = () => {
const [show,setShow]=useState(false);




 return (
    <>
    <button onClick={()=>{setShow(e=>!e)}} > show or hide </button>  
     
     {show && (
        <div  >
            
            This is pop up box 
             </div>
     )
      (console.log("Rendered ...!"))

     }

    </>
     )
}

export default UseLayoutEffect  