import React from 'react'
import useStatic from './UseStatic';
import useStorage from './useStorage'

const UseLocalstorage = () => {

const [name,update]=useStorage("naam");

useStatic("staicPage"); 

// console.log("main component rendered ..!")
 return (
    <>
     
    <div style={{height:"2000px",padding:"1000px"}} > 

    <input type="text" value={name} onChange={(e)=>{update(e.target.value)}} />
        
    </div>

    
    
    </>
  )
}

export default UseLocalstorage;