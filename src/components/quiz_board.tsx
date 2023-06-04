import React from "react";
import { MultipleChoice } from "../models/exam_types/multiple_choice_types";
import Multiple_Choice from "./template/multiple_choice";

const Quiz_Board = () => {
  const sample:MultipleChoice = {
    type:"multiple",
    id:435,
    numbering:1,
    question:"What is progamming?",
    choiceA:"I dont Know",
    choiceB:"Who Are you",
    choiceC:"Playing",
    choiceD:"None of the Above",
    answerKey: "D"

  }
  
  return (
    <div className="flex flex-col w-full justify-center items-center h-screen">
        <div>
            Quiz Board
        </div>
      <div className="flex container flex-row bg-green-500 h-full">

        <div className="bg-red-400 container max-h-full">
            one
        </div>
        <div className="bg-yellow-400 container h-full w-full">
        <Multiple_Choice data={sample} />
        </div>
      </div>
    </div>
  );
};

export default Quiz_Board;
