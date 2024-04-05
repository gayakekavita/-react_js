//import "./styles.css";
// here we are importing useState from the react
import { useState } from "react";
export default function App() {
  //below code of line will create the new state 
  const [advice, setAdvice] = useState(" ");
  async function getAdvice(params) {
    //below res is the promise variable .
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }
  return (
    <div className="App">
      <h1>{advice}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={getAdvice}> Click me </button>
    </div>
  );
}
