import React from "react";
import { MultipleChoice } from "../../models/exam_types/multiple_choice_types";

interface MultipleChoiceProps {
  data:MultipleChoice
}
const Multiple_Choice = ({data}:MultipleChoiceProps) => {
  return (
    <>
      <div className="flex flex-col justify-start items-start h-screen px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 rounded-sm border  border-black">
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center mb-4">Responsive Div</h1> */}

        <div className="w-full flex flex-row">
          <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-left">
            {data.numbering}.&nbsp;
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-left">
            {data.question}
          </p>
        </div>

        <div className="w-full flex justify-start items-start flex-row">
          <div className="w-1/2 flex flex-col  justify-start items-start px-6 space-y-8">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-left">A.&nbsp;{data.choiceA}</p>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-left">B.&nbsp;{data.choiceB}</p>
          </div>

          <div className="w-1/2 flex flex-col  justify-start items-start space-y-8">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-left">C.&nbsp;{data.choiceC}</p>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-left">D.&nbsp;{data.choiceD}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Multiple_Choice;
