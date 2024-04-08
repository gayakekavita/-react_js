import { useState } from "react";
const message = ["Learn React", "Apply for jobs", "Invest your income"];

export default function App() {
  //here we are using the concept of state
  const [step, setStep] = useState(1);

  //adding another state
  const [isOpen, setIsopen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  //const step = 1;
  return (
    <>
      <button className="close" onClick={() => setIsopen(!isOpen)}>
        &#x2717;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step{step}: {message[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={() => handlePrevious()}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
