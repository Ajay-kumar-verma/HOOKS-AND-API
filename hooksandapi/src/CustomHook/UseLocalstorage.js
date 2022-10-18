import React, { useEffect, useState } from 'react'
import UseStatic from './UseStatic';
import useStorage from './useStorage'

const UseLocalstorage = ({x}) => {

const [name,update]=useStorage("naam");


console.log("uselocalStroage rendered ..!",);


 return (
    <>
<UseStatic name="staicPage" />     
    

    <div style={{height:"2000px",padding:"1000px"}} > 

    <input type="text"  
    value={name} 
     onChange={(e)=>{update(e.target.value);}}
     
     
     />
        
    </div>

    
    
    </>
  )
}

export default UseLocalstorage;