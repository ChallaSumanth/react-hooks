import React, { Component, useContext } from 'react';
import { CounterContext } from './CounterContext';
const FComponenet = () =>{
const [counter, setCounter] = useContext(CounterContext);
        return(
           <>
             <h1>Function Componenet</h1>

            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <FChild/>
           </>
        )
}
const FChild = () =>{
    const [counter, setCounter] = useContext(CounterContext);
    return (
        <div>
            <h1>Function Child Componenet</h1>
            <h1>{counter}</h1>
            <button onClick={() =>setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}
export default FComponenet;