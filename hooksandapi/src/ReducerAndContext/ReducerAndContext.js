import React,{useReducer} from 'react'
import A from "./A"; 
export  const  context=React.createContext();

const ReducerAndContext = () => {

   const initialValue={
        value:0
    }

    const update = (prevState, action) => {
        switch (action.type) {
            case "increament":
                return  {value:prevState.value+action.value};
            case "decreament":
                return {value:prevState.value-action.value};
            case "reset":
                return {value:action.value };
            default:
                return {value:prevState.value};
        }
    }
    const [count, dispatch] = useReducer(update, initialValue)


    return (

      <context.Provider  value={{count,dispatch}} > 
         <A/>
        </context.Provider>   
     
 
    )
}

export default ReducerAndContext