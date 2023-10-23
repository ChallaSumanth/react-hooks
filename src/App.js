import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import FComponenet from './FComponent';
import CComponent from './CComponenet';
import { CounterContext } from './CounterContext';
import { useReducer } from 'react';
import useCounter from './useCounter';
import ScreenComponent from './ScreenComponent';
const  initialState = [{id:Date.now(), name:"Sumanth",email:"@Gmail.com"},];
// function reducer(state, action){
//   switch (action.type) {
//     case "add":
//        return [...state, action.payload];
//     case "delete":
//         return state.filter(contact =>{
//           return contact.id !== action.payload.id
//         });
//     default:
//       throw new Error
//   }
// }
function App() {
  // const[name, setName] = useState("Sumanth");
  // const[flag, setFlag] = useState(false);
  // const[steps, setSteps] = useState(0);
  // const[names, setNames] = useState([]);
  // //let a = "Sumanth";
  // function changeName(){
  //   return setFlag(!flag);
  // }
  // function increment(){
  //   setSteps((prevState) => prevState + 1);
  //   setSteps((prevState) => prevState + 1);
  // }
  // function decrement(){
  //   return setSteps(steps - 1);
  // }
  // function addNames(e){
  //   e.preventDefault();
  //   setNames([...names, {id: names.length, name}]);
  //   setName("");
  // }
 //const[counter, setCounter] = useState(0);
 const[counter, increment, decrement, reset] = useCounter(0);
//  const[state, dispatch] = useReducer(reducer, initialState);
//  const[name, setName] = useState("");
//  const[email, setEmail] = useState("");
  // const Increment = () => {
  //   setCounter(counter + 1);
  // }
  // const Decrement = () =>{
  //   setCounter(counter - 1);
  // }
  // const addContact = (e) =>{
  //   console.log("called")
  //   e.preventDefault();
  //   const contact = {
  //     id : Date.now(),
  //     name : name,
  //     email : email
  //   }
  //   setName("");
  //   setEmail("");
  //   dispatch({type : "add", payload:contact})
  // }
  return (
    <div className="App border">
      {/* <div>Hello, {flag ? name : ""}</div>
      <button onClick = {changeName}>Click</button>
      <div>
        <hr></hr>
      <button onClick = {increment}>+</button>
      <div>{steps}</div>
      <button onClick = {decrement}>-</button>
      </div>
      <hr></hr>
      <form onSubmit={addNames}>
        <input type='text' value={name} placeholder="add names"
        onChange={(e) => setName(e.target.value)}></input>
        <button>Submit</button>
      </form>
      <hr></hr>
       <ul>
        {names.map((item) =>(
          <li key = {item.id}>{item.name}</li>
        ))}
       </ul> */}
       <h1>App Component</h1>
       <h2>{counter}</h2>
       {/* <form onSubmit={addContact}>
        <input type='text' 
        placeholder='name' 
        value={name}
        onChange={(e) => setName(e.target.value)}/>
        <br></br>
        <input type='text' 
        placeholder='email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <div>
        <button type='submit'>Add Contact</button>
        </div>
       </form> */}
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       <button onClick={reset}>Reset</button>
       <ScreenComponent/>
       {/* <button onClick={() => dispatch({type:"increment"})}>Increment</button>
       <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
       <hr></hr> */}
       {/* <CounterContext.Provider value = {[counter, setCounter]}>
        <FComponenet />
        <hr></hr>
        <CComponent />
       </CounterContext.Provider> */}
       {/* <div>
        <ul>
          {state.map(contact =>{
            return(
              <li key = {contact.id}> 
              <h2>{contact.name}</h2>
              <h2>{contact.email}</h2>
              <div>
                <button onClick= {() => dispatch({type:"delete", payload : {id : contact.id}})}>Delete</button>
              </div>
            </li>
            )
          })}
        </ul>
       </div> */}
    </div>
    
  );
}

export default App;
