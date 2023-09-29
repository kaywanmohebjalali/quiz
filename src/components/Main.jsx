import Error from "./Error";
import Loader from "./Loader";
import Questions from "./Questions";
import Started from "./Started";
import { useReducer } from "react";
import useGetDataWithReducer from "./myHooks/useGetDataWithReducer";

let url = "http://localhost:9000/questions";

const initialState = {
  questions: [],
  statusQuiz: "loading",
  level: "all",
  count:'all'
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, statusQuiz: "ready" };
    case "start":
      return { ...state, statusQuiz: "active" };
    case "dataFailed":
      return { ...state, statusQuiz: "error" };

    case "restart":
      return { ...state, statusQuiz: "ready" };

    case "level":
      return { ...state, level: action.payload };

      case "count":
      return { ...state, count: action.payload };

    default:
      throw new Error("unknown action");
  }
}



const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { statusQuiz, questions } = state;



  let questionsUser = []
  questions.forEach(item=>{
    if(state.level == "all"){
      questionsUser=[...questionsUser, {...item}]
    }
    else if(item.level == state.level){
      questionsUser=[...questionsUser, {...item}]
    }
  })
  questionsUser = state.count>=questionsUser.length || state.count=='all'?questionsUser
  :questionsUser.splice(0,state.count)


 
  useGetDataWithReducer(url, dispatch, "dataReceived", "dataFailed");

  return (
    <main className="bg-gray-900 h-[80vh] pt-20">
      {statusQuiz == "loading" && <Loader />}
      {statusQuiz == "error" && <Error />}
      {statusQuiz == "ready" && (
        <Started  numQ={questions.length} dispatch={dispatch} state={state} />
      )}
      {statusQuiz == "active" && (
        <Questions questions={questionsUser} dispatch={dispatch} />
      )}
    </main>
  );
};

export default Main;
