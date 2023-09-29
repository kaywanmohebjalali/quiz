import { useState, useRef } from "react";
import Timer from "./Timer";
import EndQuiz from "./EndQuiz";
import Option from "./option";
import Click from "./Click";
import Progress from "./Progress";

let WidthPercentage = "0%";
const Questions = (prop) => {
  const { questions, dispatch } = prop;
  
  const TIME_FOR_QUIZ = questions.length * 30;
  const [, setT] = useState(0);
  const [point, setPoint] = useState(0);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const optionClick = useRef(null);
  let countPoints = useRef({
    points: questions.length,
    rightCount: 0,
    incorrectCount: 0,
  });

  const [time, setTime] = useState(10);
  let width = useRef(Number((100 / questions.length).toFixed(2)));
  const result = useRef(Number(width.current));

  const sumPoints = useState(function () {
    let pointsValue = questions.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.points;
    }, 0);

    return pointsValue;
  });

  function nextQuestions() {
    index < questions.length - 1 && setIndex((i) => i + 1);

    if (width.current < 99) {
      width.current += result.current;
      WidthPercentage = `${width.current}%`;
    } else {
      WidthPercentage = "100%";
    }
  }

  function backQuestions() {
    index > 0 && setIndex((i) => i - 1);

    if (width.current < 99) {
      width.current += result.current;
      WidthPercentage = `${width.current}%`;
    } else {
      WidthPercentage = "100%";
    }
  }

  function answer(num) {
    questions[index]["right"] = 0;
    questions[index]["incorrect"] = 0;
    if (questions[index].correctOption == num) {
      questions[index]["right"] = 1;

      setT(Math.random());
      setPoint((p) => p + questions[index].points);
      countPoints.current = {
        ...countPoints.current,
        rightCount: countPoints.current.rightCount + 1,
      };
    } else {
      setT(Math.random());

      questions[index]["incorrect"] = 1;
      optionClick.current = num;
      countPoints.current = {
        ...countPoints.current,
        incorrectCount: countPoints.current.incorrectCount + 1,
      };
    }
  }

  function finish() {
    setFinished(true);
  }
  return (
    <>
      {!finished && (
        <section className="w-[80%] m-auto">
          <Progress WidthPercentage={WidthPercentage}>
            <div className="w-full m-auto mt-2  flex justify-between text-white">
              <p>
                Questions {index + 1} / {questions.length}
              </p>
              <p>{`${point} / ${sumPoints[0]} points`}</p>
            </div>
          </Progress>

          <Option
            question={questions[index]}
            answer={answer}
            optionClick={optionClick}
            time={time}
          />

          <div className="flex justify-between w-full text-white mt-5">
            {index>=1 &&

              <Click
              func={backQuestions}
              AddClassNAme={
                "text-white w-[20%] text-center text-xl rounded-full border-2 border-indigo-500 hover:bg-indigo-600 py-2"
              }
              >
              Back
            </Click>

            }
            <Timer
              {...{
                rangeTime: TIME_FOR_QUIZ,
                statusTime: setTime,
                ui: true,
              }}
            />
            {time >= 1 &&
            index < questions.length - 1 
            ? (
              <>
                <Click
                  func={nextQuestions}
                  AddClassNAme={
                    "text-white w-[20%] text-center text-xl rounded-full border-2 border-indigo-500 hover:bg-indigo-600 py-2"
                  }
                >
                  Next
                </Click>
              </>
            ) : (
              <Click
                func={finish}
                AddClassNAme={
                  "text-white w-[20%] text-center text-xl rounded-full border-2 border-indigo-500 hover:bg-indigo-600 py-2"
                }
              >
                Finish
              </Click>
            )}
          </div>
        </section>
      )}
      {finished && (
        <EndQuiz
          countPoints={countPoints.current}
          sumPoints={sumPoints[0]}
          point={point}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default Questions;
