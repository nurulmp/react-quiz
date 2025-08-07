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

  //next qustion
  function nextQuestion() {
    if (currentQuestion + 1 < questions.lenght) {
      setCurrentQuestion((prveCurrent) => prveCurrent + 1);
    }
  }

  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <=  questions.lenght) {
      setCurrentQuestion((prveCurrent) => prveCurrent + 1);
    }
  }

  return (
    <>
      {loading && <div>loading....</div>}
      {error && <div>there was an error....</div>}
      {!loading && !error && qna && qna.lenght > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers qna={qna} handleChange={handleAnasweChange} />
          <ProgressBar />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
export default Quiz;
