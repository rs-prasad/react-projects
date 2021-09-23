import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  //console.log(data);
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about log</h3>
      </div>
      <section className="info">
        {questions.map((question) => (
          <SingleQuestion data={question} key={question.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
