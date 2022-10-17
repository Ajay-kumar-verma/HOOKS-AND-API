import React,{useEffect,useState} from 'react'

const UseEffect2 = () => {

  const [count,setCount]=useState(0); 
  const [time,update]=useState(0);

  useEffect(()=>{
//   In this case when this block execute it set new 
// setInterval ,that caur an error

console.log(" Use Effect rendered ..!")

const x=   setInterval(() => {
     update(s=>s+1);
  }, 1000);  

  return ()=>{clearInterval(x)}

   
  //      return ()=>{
  //         console.log(" Return statement is executed ...!");
  //      }

  //  from second time return statement will execute first
  //  for clean up the code 

 },[count])

 console.log("  component  rendered ..!")
    return (
  <>
      
   Time is : {time}
   <button onClick={()=>setCount(p =>p+1)}> Count  </button>
    
  </>
      )
}

export default UseEffect2