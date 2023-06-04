export interface MultipleChoice {
    type:string;
    id:number;
    numbering:number;
    question:string;
    choiceA:string | number | boolean;
    choiceB:string | number | boolean;
    choiceC:string | number | boolean;
    choiceD?:string | number | boolean;
    answerKey?:string | number | boolean;
}