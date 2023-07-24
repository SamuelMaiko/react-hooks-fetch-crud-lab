import React from "react";

function QuestionItem({ question, onquestions, onsetquestions}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDelete=()=>{
    fetch(`http://localhost:4000/questions/${id}`,{
      method:'DELETE'
    })
    .then(response=>response.json())
    const afterDeleteArray=onquestions.filter(singleQuestion=>{
      return singleQuestion.id!==id
    })
    onsetquestions(afterDeleteArray)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
