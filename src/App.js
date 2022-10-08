import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
    openModal
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  const { correct_answer, incorrect_answers, question} =
    questions[index];
  // const answers = [correct_answer, ...incorrect_answers];
  let answers= [...incorrect_answers]
  const tempIndex= Math.floor(Math.random()* 3)
  // console.log(answers.push(answers[tempIndex]));
  //const answers= [1,2,3,]
  console.log('values',answers[tempIndex])
  if(tempIndex ===3){
    answers.push(correct_answer)
  }else{
    answers.push(answers[tempIndex])
    answers[tempIndex]=correct_answer
  }
  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers?.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                ></button>
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
