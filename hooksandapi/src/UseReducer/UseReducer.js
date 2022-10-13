import React, { useReducer } from "react";


const UseReducer = () => {

    //  const update=(state,data)=>{
    //     return state+data;
    //  }

    const update = (prevState, action) => {
        switch (action) {
            case "increament":
                return ++prevState;
            case "decreament":
                return --prevState;
            case "reset":
                return 0;
            default:
                return prevState;

        }
    }


    const [count, dispatch] = useReducer(update, 0)


    return (<>

        <p>this is reducer :{count}</p>
        {/* <button onClick={()=>{dispatch(3)}}  > Count </button> */}

                {/*  In dispatch we can pass anything we want like object  */}
        <button onClick={() => { dispatch("increament") }}  > increament </button>
        <button onClick={() => { dispatch("decreament") }}  > Descreament </button>
        <button onClick={() => { dispatch("reset") }}  > Reset </button>


    </>)

}

export default UseReducer;