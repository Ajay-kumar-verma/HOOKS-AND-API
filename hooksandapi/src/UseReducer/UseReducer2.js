import React, { useReducer } from "react";

const UseReducer2 = () => {
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
                return {value:action.value};
            default:
                return {value:prevState.value};
        }
    }
    const [count, dispatch] = useReducer(update, initialValue)


//  console.log("reducer")

    return (<>

        <p>this is reducer :{count.value}</p>

                {/*  In dispatch we can pass anything we want like object  */}
        <button onClick={() => { dispatch({type:"increament",value:20}) }}  > increament </button>
        <button onClick={() => { dispatch({type:"decreament",value:10}) }}  > Descreament </button>
        <button onClick={() => { dispatch({type :"reset",value:90}) }}  > Reset </button>

    </>)

}

export default UseReducer2;