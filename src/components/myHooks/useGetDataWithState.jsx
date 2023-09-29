import { useEffect, useState } from "react";

const useGetDataWithState = (url) => {
 
  if (!url) throw new Error("please enter url");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log('useGetDataWithState');
  useEffect(() => {
    async function getQuestions() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    getQuestions();
  }, [url]);
  return { data, loading, error };
};

export default useGetDataWithState;
