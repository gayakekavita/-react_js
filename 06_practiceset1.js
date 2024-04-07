import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Intro/>
      <Avtar/>
      <Skillset/>
    </div>
  );
}
function Intro(){
  return (<div className="intro">
       <h4> hey I am Gayake kavita sanjay Currently pursuing BE in IT branch FROM DYPCOE </h4>
  </div>)
}
function Avtar(){
  return (
    <div className="avtar">
         <img src="https://tse4.mm.bing.net/th?id=OIP.6b8EYnxj_mjR9cWq2DegMgHaG-&pid=Api&P=0&h=180" alt="my photo"/>
    </div>
  );
}
function Skillset()
{
  return (
    <div className="skill">
      <p>  Programming languages : </p>
      <span>Java , </span>
      <span>Python , </span>
      <span>PHP ,</span><br/>
      <span>Javascript , </span>
      <span>Typescript ,</span>
      <span>.Net  </span> <br/>

      
    </div>
  );
}
