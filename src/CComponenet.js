import React, { Component } from 'react';
import { CounterContext } from './CounterContext';
const CComponent = (props) =>{

    return(
        <div className="border">
        <h1 >
            Class Component
        </h1>
        <h2>{props.counter}</h2>
        <CounterContext.Consumer>
        {(value) => {
            return <h2>{value}</h2>
        }

        }
        </CounterContext.Consumer>
        </div>
    )
}
export default CComponent;