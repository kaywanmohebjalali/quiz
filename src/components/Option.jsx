const Option = (prop) => {
  const { question, answer,  optionClick, time } = prop;
 
  return (
    <section className="w-full m-auto mt-20 text-white">
      <h1 className="text-xl h-[3rem] text-yellow-200 font-bold">{question.question}</h1>
      <ul className="mt-5 flex flex-col gap-3">
        {question.options.map((option, indexOption) => {
          return (
            <button
              onClick={() => answer(indexOption)}
              key={option}
              disabled={question.right || question.incorrect|| time<1}
              className={`
               text-black  w-full py-2 ps-5 text-[1.2rem]  rounded-full  transition-all ease-in-out duration-300 shadow-md
                ${
                  (question.right || question.incorrect) && question.correctOption == indexOption
                    ? "bg-green-500 ms-5"
                    : question.incorrect && optionClick.current == indexOption
                    ? "bg-red-600 ms-[-1.25rem]"
                    : "hover:cursor-pointer bg-gray-300 "
                } 
                ${
                  !question.right &&
                  !question.incorrect &&
                  time>0
                  &&
                  "hover:ms-5 hover:bg-gray-600 hover:font-bold hover:text-yellow-500"
                }
               
                      `}
            >
              {option}
            </button>
          );
        })}
      </ul>
    </section>
  );
};

export default Option;
