import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";
function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videoQuery);

        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
          console.log("snapshot not working");
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    setTimeout(() => {
      fetchVideos();
    }, 2000);
  }, [page]);
  return {
    loading,
    error,
    videos,
    hasMore,
  };
}

export default useVideoList;
