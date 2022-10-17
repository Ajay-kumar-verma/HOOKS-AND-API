import React,{ useRef} from 'react'

const UseRef2 = () => {
 const Email=useRef(null);
 const Password=useRef(null);

 const submit=(e)=>{
  e.preventDefault();
  console.log("Data is : ",{Email:Email.current.value,Password:Password.current.value})

  }
// Here UseRef IMPROVE THE PERFORMACE OF THE WEBSITE 

  console.log(" Component rendered ..!")  
  return (
    <form>
    <input type="text" ref={Email}  /> 
    <input type="password" ref={Password}  /> 
    <button onClick={(e)=>{submit(e)}} >Login</button>
    </form>
    )
}

export default UseRef2