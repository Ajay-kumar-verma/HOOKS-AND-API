import React ,{useState,useTransition,useEffect} from 'react'

const Usetransition = () => {
 const [data,setData]=useState("");
 const [list,setList]=useState([]); 
 
 const [isPending,transition]=useTransition();
 
useEffect(()=>{
 
  const l=[];
  
  transition(()=>{
    for(let i=0;i<100000;i++){
        l.push(data);
     }
     setList(l);
    })


},[data])

console.log("rendered")
 
    return (
    <>
    <input  type="text" onChange={(e)=>{setData(e.target.value)}} />
    {isPending?"Data is loading ":
       list.map(e=>{

   return (
    <>
    <br/>
     {e}
     </>
     )

   } )

    }  


    </>
  )
}

export default Usetransition