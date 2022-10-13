import React ,{memo} from 'react'
import GrandChild from './GrandChild';

const Children = ({count}) => {
    console.log("Children Component is rendered ..!");
  
    return (
   <>
    <p>Count value is :
     {count}
         </p>
   <div>This is Children Component </div>
    <GrandChild />

    </>
    )
}

//  if changes not occurs it return memo (memorise value  )
export default memo(Children)
