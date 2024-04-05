//import "./styles.css";
import { useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState(" ");
  const [count, setCount] = useState(0);
  async function getAdvice(params) {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    //upadate the value of counts by following function
    setCount((c) => c + 1);
  }
  return (
    <div className="App">
      <h1>{advice}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={getAdvice}> Click me </button>
      <p> You have clicked {count} times</p>
    </div>
  );
}
