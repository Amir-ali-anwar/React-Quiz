import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  // console.log(questions[0]);
  const { type, correct_answer, incorrect_answers, question } = questions[2];
  const answers = [correct_answer, ...incorrect_answers];
  return (
    <main>
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">{answers?.map((answer,index)=>{
            return (
              <button
                key={index}
                className="answer-btn"
                dangerouslySetInnerHTML={{ __html: answer }}
              ></button>
            );
          })}</div>
        </article>
      </section>
    </main>
  );
}

export default App;
