import React,{useContext} from 'react'
import {context} from './ReducerAndContext'
const B = () => {

    const {count,dispatch}=useContext(context)

    return (
  <>
  
  <p>this is reducer :{count.value}</p>

 {/* This is dispatch can be called from anywhere 
 and from anywhere we can get the value 
 
 */}

<button onClick={() => { dispatch({type:"increament",value:20}) }}  > increament </button>
<button onClick={() => { dispatch({type:"decreament",value:10}) }}  > Descreament </button>
<button onClick={() => { dispatch({type :"reset",value:90}) }}  > Reset </button>

  </>
    )
}

export default B