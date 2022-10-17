import React,{useEffect, useState} from 'react'
import useStorage from './useStorage';
const useStatic = (name) => {

// console.log("Static component called ")    

    let [data,update]=useStorage(name);
       data=JSON.parse(data);  

useEffect(()=>{
    window.addEventListener('scroll', () => {
         let y=window.scrollY;
         let x=window.scrollX;
         let data={y,x};
        
        update(JSON.stringify(data))
    
    });

    window.scrollTo({ top: data.y, left: data.x, behavior: 'smooth' });

},[])

return  [data,update];


}

export default useStatic