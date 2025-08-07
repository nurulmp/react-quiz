import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

import { useEffect, useState } from "react";

function useQuestions(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizQuery);
        console.log(snapshot);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestion((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchQuestions();
  }, [videoId]);
  return {
    loading,
    error,
    questions,
  };
}

export default useQuestions;
