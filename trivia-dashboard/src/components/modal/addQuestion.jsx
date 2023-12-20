import React from "react";
import { Form } from "react-router-dom";
const addQuestion = () => {
  const [question, setQuestion] = useState([
    {
      Question: "",
      difficulty: "",
    },
  ]);
  return (
    <div className="flex justify-center w-full text-blue-400 text-4xl">
      <Form buttonText="Add Question" details={question} onChange={() => {}} />
    </div>
  );
};

export default addQuestion;
