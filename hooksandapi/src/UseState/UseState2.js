import React,{useState} from 'react'

const UseState2 = () => {

 const [count,setCount]=useState(0);
//  if we want to make any changes  or call api when count change better to use useEffect     

const adjust=(val)=>{
     
//   Here we are passing value
//   setCount(count+val);
//   setCount(count+val);


//   Here we are passing call back 
  setCount(prev=>prev+val)
  setCount(prev=>prev+val)

}

 return (
    <>
    <button onClick={() =>adjust(+1)}>+</button>
    {count}
    <button  onClick={() =>adjust(-1)} >-</button>
   
    </>
  )
}

export default UseState2