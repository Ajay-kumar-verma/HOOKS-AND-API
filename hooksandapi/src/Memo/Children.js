import React ,{memo,useEffect} from 'react'
import GrandChild from './GrandChild';

const Children = ({count}) => {
    
   
  useEffect(()=>{
    console.log("Children Component is rendered ..!");
  },[])  


    return (
   <>
    <p> Children  Count value is :
     {count} 
    
    {console.log("child component is executed ..!")}
         </p>
   <div>This is Children Component </div>
    <GrandChild />

    </>
    )
}

//  if changes not occurs it return memo (memorise value  )
export default memo(Children)
