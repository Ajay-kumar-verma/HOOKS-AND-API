import React from 'react'
import { useReducer } from 'react'
import UseLocalstorage from './UseLocalstorage'

const Main = () => {


const initialVal = ['x','y','z']

const [data ,setData] = useReducer((prev,{target:{name,value}})=>({...prev,[name]:value}),{})

  const [state,setState]  = useReducer((prevVal,payload)=>{
  // console.log(payload);
  if(payload === 'India')
    return ["a","b","c"].map(e=>e+"IND");

   if(payload === 'pakistan')
    return ["a","b","c"].map(e=>e+"PAK");

    if(payload === 'thailand')
    return ["a","b","c"].map(e=>e+"THAI");

  },initialVal)




    // console.log("main component rendered ..!")

  return (
    <div>
  {/* <UseLocalstorage  /> */}

    <form  >
     <input type='text' value={data?.name} name='name' onChange={setData} /><br/>
     <input type='number'  name="number" value={data?.number} onChange={setData}/><br/>
     <select name='country' onChange={(e)=>{setData(e);setState(e.target.value)}} >
      <option value="India"> India</option>
      <option value="pakistan">pakistan</option>
      <option value="thailand">thailand</option>
      </select>
      
      <select name='state' onChange={setData}  >
      {
        state.map(e=><option>{e}</option>)
      }

       </select>
      
     <br/>
    <input type='submit'  onClick={(e)=>{e.preventDefault();console.log(data)}} value="submit" />

    </form>






    </div>
  )
}

export default Main