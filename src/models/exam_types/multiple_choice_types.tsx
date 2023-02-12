export interface MultipleChoice {
    id:number;
    numbering:number;
    question:string;
    choiceA:string | number | boolean;
    choiceB:string | number | boolean;
    choiceC:string | number | boolean;
    choiceD?:string | number | boolean;
}