import React,{ useContext } from 'react';
import context from './Context/Context'

function App() {

const data=useContext(context);

 return (
  <>
   {
   (console.log(data))
   }
   <button onClick={()=>{data.setData({name:"kumar ashok  "})}} ></button>
   
    </>
  );
}

export default App;
