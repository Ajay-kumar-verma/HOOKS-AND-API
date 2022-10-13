import React,{memo} from 'react'

const GrandChild = () => {

    console.log("Grand child Component is rendered ..!");

    return (
        <>
         <div>
         This is  Grand Child component

         </div>


        </>)
}

export default  memo(GrandChild)