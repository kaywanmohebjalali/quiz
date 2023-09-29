import Click from "./Click";

const EndQuiz = (prop) => {
  const {countPoints, sumPoints, point, dispatch} = prop;
  let Unanswered = countPoints.points-(countPoints.incorrectCount+countPoints.rightCount)

  let emoji = ''
  if(point==sumPoints)emoji='🥇'
  else if(point> sumPoints*80/100)emoji='😀'
  else if(point>= sumPoints*60/100)emoji='😁'
  else if(point>= sumPoints*30/100)emoji='😏'
  else if(point< sumPoints*30/100)emoji='😞'

  return <div className="text-white text-center ">
  
    <h1 className="text-3xl text-orange-600 mb-6"> End of the Quiz</h1> 
    <p className="text-xl ">All questions : <span className="text-yellow-300">{countPoints.points}</span></p> 
    <p className="text-xl my-3">right answer : <span className="text-yellow-300">{countPoints.rightCount}</span> </p>
    <p className="text-xl">incorrect answer : <span className="text-yellow-300">{countPoints.incorrectCount}</span> </p>
    <p className="text-xl m-3  ">Unanswered answer : <span className="text-yellow-300">{Unanswered}</span> </p>
    <button className="text-xl bg-black py-2 w-96 rounded-full mb-10 shadow-sm shadow-neutral-700">you scored <span className="text-yellow-200 mx-1">{point}</span> of out <span className="text-yellow-200 mx-1">{sumPoints}</span>  points {emoji}</button>
    <Click func={()=>dispatch({type:'restart'})}>Play again</Click>
    </div>;
};

export default EndQuiz;
