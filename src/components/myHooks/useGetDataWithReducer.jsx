import { useEffect } from "react";

const useGetDataWithReducer = (url, dispatch, successType, errorType) => {
  if (!(url && dispatch && successType && errorType))
    throw new Error("please valid enter arguments");
  useEffect(() => {
    async function getQuestions() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: successType, payload: data });
      } catch (err) {
        dispatch({ type: errorType });
      }
    }
    getQuestions();
  }, [url, dispatch, successType, errorType]);
};

export default useGetDataWithReducer;
