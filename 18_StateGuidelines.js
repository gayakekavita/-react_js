/*
  -Each component has its own state.
  -Component manages its own state no matter how many times we render the component .

  conclusion:
   Entire UI is basicaly a function of a state 
   UI=f(state)

   -With state  we view UI as the reflection of the data changing over the time.
   -We describe that reflection of data using state,event handlers and JSX.


   GuideLines::
   1.Use a state varibale for any data that the component should keep track over of time.
     This is the data will change at some point.

   2.Whenever you want someting in the component dynamic ,create a piece of state related to that "thing" and update the state when "thing" should change.

   3.If you want to change the way component looks ,or the data it displays ,update its state .
      This usually happens in the event handler function.
      
*/
