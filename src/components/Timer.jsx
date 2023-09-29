import { useEffect, useRef, useState } from "react";

const Timer = (prop) => {
  const ui = useRef(prop.ui);
  const statusTime = useRef(prop.statusTime);
  const rangeTime = useRef(prop.rangeTime);
  const [, setTime] = useState(function () {
    let sec = rangeTime.current % 60;
    let min = (rangeTime.current - sec) / 60;
    return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`;
  });

  const minutes = Math.floor(rangeTime.current / 60);
  const second = rangeTime.current % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      if (rangeTime.current > 0) {
        rangeTime.current--;
      }

      statusTime.current(rangeTime.current);

      setTime(rangeTime.current);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [statusTime]);

  return (
    <>
      {ui.current ? (
        <p
          className={`w-[20%] text-center text-xl rounded-full py-2 ${
            rangeTime.current >= 1 ? " bg-indigo-600 " : "bg-red-600"
          }`}
        >
          {minutes < 10 && "0"}
          {minutes}:{second < 10 && "0"}
          {second}
        </p>
      ) : (
        <></>
      )}
    </>
  );
};

export default Timer;
