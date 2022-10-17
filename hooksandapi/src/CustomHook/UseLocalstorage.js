import React, { useState } from 'react'
import UseStatic from './UseStatic';
import useStorage from './useStorage'

const UseLocalstorage = ({x}) => {

const [name,update]=useStorage("naam");

    UseStatic("staicPage"); 

console.log("uselocalStroage rendered ..!");


 return (
    <>
     
    <div style={{height:"2000px",padding:"1000px"}} > 

    <input type="text" value={name} onChange={(e)=>{update(e.target.value);}} />
        
    </div>

    
    
    </>
  )
}

export default UseLocalstorage;