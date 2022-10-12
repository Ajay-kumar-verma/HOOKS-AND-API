import React ,{ useState } from 'react'
import context from './Context';

const State = (props) => {
    
    const Data={
        name:"Ajay kumar verma",
        mob:"987654343",
        class:"5B"
    }   
  const [data,setData]=useState(Data)


  return (
    <context.Provider  value={{data,setData}} >
      {props.children}
   </context.Provider>

    )
}

export default State