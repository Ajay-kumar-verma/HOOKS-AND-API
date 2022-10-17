import React,{useReducer} from 'react'

const useStorage = (name) => {

//  console.log("use Storage "); 

 return useReducer((state,val)=>{
        localStorage.setItem(name,val);
        return  localStorage.getItem(name);
    },localStorage.getItem(name));
    

 }

export default useStorage;