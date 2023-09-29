import { useEffect } from "react";
import { useState } from "react";
let color = "bg-red-600";
const Loader = () => {
  const [rangeWidth, setRangeWidth] = useState(5);

  useEffect(() => {
    const time = setInterval(() => {
      if (rangeWidth < 99) {
        setRangeWidth((b) => b + 0.05);
        color =
          rangeWidth < 40
            ? "bg-red-600"
            : rangeWidth > 40 && rangeWidth < 80
            ? "bg-sky-500"
            : "bg-green-500";
      } else {
        setRangeWidth(5);
      }
    }, 1);

    return () => {
      clearInterval(time);
    };
  });

  return (
    <div className="w-1/2 m-auto h-[10px] mb-4 bg-gray-500 text-white rounded-full">
      <div
        style={{ width: `${rangeWidth}%` }}
        className={`h-[10px]   rounded-full ${color}`}
      ></div>
    </div>
  );
};

export default Loader;
