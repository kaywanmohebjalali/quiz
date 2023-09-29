
import Click from "./Click"
const options = [
  {value: 'all', text: 'all questions'},
  {value: 'hard', text: 'hard questions'},
  {value: 'medium', text: 'medium questions'},
  {value: 'easy', text: 'easy questions'},
];


const Started = (prop) => {
  const {numQ, dispatch}=prop
 

  function start(){
    dispatch({type:'start'})
  }
  return (
    <>
    <div className="text-white text-center flex flex-col gap-5">
      <h1 className="text-4xl font-bold">Welcome to The Quiz</h1>
      <p >{numQ} questions to test your React Mastery</p>
        <p className="text-yellow-300 mt-10 text-xl font-bold">Select the quiz level :</p>
      <select defaultValue={prop.state.level}  className="p-2 w-80 text-black m-auto" onChange={(e)=>dispatch({type:"level",payload:e.target.value})}  >
        
       {options.map(option => (
          <option key={option.value} value={option.value}  >
            {option.text}
          </option>
        ))}


    
        </select> 
        <input onChange={(e)=>dispatch({type:"count",payload:!isNaN(e.target.value)?Number(e.target.value):'all'})} className="p-2 w-80 text-black m-auto" type="text" placeholder="Enter the number of question? " />
     <Click func={start}>started</Click>
    </div>

   
    </>
  )
}

export default Started