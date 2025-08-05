import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../Progressbar";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((questions) => {
        questions.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionsID].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};
function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnasweChange(e, index) {
    dispatch({
      type: "answer",
      questionsID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  console.log(qna);
  return (
    <>
      <h1>{qna[currentQuestion].title}</h1>
      <h4>Question can have multiple answers</h4>
      <Answers qna={qna} handleChange={handleAnasweChange} />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
export default Quiz;
