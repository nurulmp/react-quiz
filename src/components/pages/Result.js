import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

function Result() {
  const { id } = useParams();
  const location = useLocation();

  const { qna } = location.state || {};
  const { loading, error, answers } = useAnswers(id);
  console.log(answers);
  return (
    <>
      {loading && <div>loading...</div>}
      {error && <div>there was an error</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary />
          <Analysis />
        </>
      )}
    </>
  );
}
export default Result;
