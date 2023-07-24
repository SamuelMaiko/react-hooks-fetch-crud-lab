import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({onquestions, onsetquestions}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          onquestions.map(eachquestion=>{
            return <QuestionItem question={eachquestion} onquestions={onquestions} onsetquestions={onsetquestions} />
          })
        }
      </ul>
    </section>
  );
}

export default QuestionList;
