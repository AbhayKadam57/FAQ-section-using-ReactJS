import './App.css';
import react from "react";
import questions from "./data";
import SingleQuestion from "./Question";

function App() {
  return (

    <main>
      <h1 className='Title'>FAQs</h1>
      <section>
          {questions.map((questions)=>{

            return (<SingleQuestion title={questions.title} info={questions.info} key={questions.id}/>)

          })}   

      </section>
           
    </main>
   
  )
}

export default App;
