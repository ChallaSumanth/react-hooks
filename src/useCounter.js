import { useState } from "react";

export default function useCounter(initialValue)
{
    const[value, setValue] = useState(initialValue);
    const increment = () =>{
        return setValue(value + 1);
    }
    const decrement = () =>{
        return setValue(value - 1);
    }
    const reset = () =>{
        return setValue(0);
    }
    return [value, increment, decrement, reset];
}