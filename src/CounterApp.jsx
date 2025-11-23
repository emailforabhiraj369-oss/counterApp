// using useState to update UI

import { useState } from "react";
import "./App.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  // increment
  function incrementer() {
    if(count<20)setCount(count + 1);
  }

  // decrement
  const  decrement= () => {
   if(count>0) setCount(count - 1);
  };

  return (
    <>
      <h2>Countr APP WITH HOOKS ::{count} </h2>
      <button onClick={incrementer}>Incremented value :{count}</button>

      <br />

      <button onClick={decrement}>decremented value : {count}</button>
      <p>footer:{count}</p>

      <h1>{count}</h1>
    </>
  );
}

export default CounterApp;
