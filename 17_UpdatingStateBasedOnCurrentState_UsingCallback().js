//below is the normal function 'setStep' which will update the value of step only by 1 even if we call setStep() function twice .
//After sucessful execution of function value of step = step+1 
//But actually it should be  step=step+2
function handleNext() {
    if (step < 3) {
      setStep(step + 1);
      setStep(step + 1);
    }
  }

//So to solve above error we use callback function to store the current value and make updation on current value 
function handleNext() {
    if (step < 3) {
      setStep(s=> s+1);
      setStep(s=>s+1);
    }
  }

// After successful execution of the function step value will be step=step+2 
