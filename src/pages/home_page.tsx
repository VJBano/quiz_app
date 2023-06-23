import React, { useEffect, useState } from 'react'
import { ScreenDimensionProps } from '../models/screen_types'
import { debounce } from 'lodash';
import { BsPlusSquare } from "react-icons/bs";
import { Essay } from '../models/exam_types/essay_types';
import { MultipleChoice } from '../models/exam_types/multiple_choice_types';
import { TrueOrFalse } from '../models/exam_types/true_or_false_types';
import { Choice } from 'aws-sdk/clients/wellarchitected';

type ChoiceStackParam = Essay | MultipleChoice | TrueOrFalse

const Home_page = () => {

  const [screenSize, setScreenSize] = useState<ScreenDimensionProps>({width:window.innerWidth, height:window.innerHeight})
  const [choiceStack, setChoiceStack] = useState<ChoiceStackParam[]>([])
  const [counter, setCounter] = useState(0)
  useEffect(() => {

    const handleResize = debounce(() => {

      setScreenSize({height:window.innerHeight, width:window.innerWidth})
    },100)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])


  const addChoice = (id:number) =>{

    if(id == 1) {
      const Choice: MultipleChoice ={
        type:"Multiple",
        id:1,
        numbering:1,
        question:"How di you now",
        choiceA:"idk",
        choiceB:"idk1",
        choiceC:"idk2",
        choiceD:"id3k",
        answerKey:"41dk",
      }
      setChoiceStack([...choiceStack,Choice])
    } 
    else if(id == 2){

      const Choice: Essay = {
        id:1,
        numbering:1,
        question:" who ARE YOU",
        answer:"string me ",
      }

      setChoiceStack([...choiceStack,Choice])
    }
    
    }

    const MultipleChoiceType = (choice: ChoiceStackParam): choice is MultipleChoice  => {
      return 'type' in choice;
    }

    const EssayType = (choice: ChoiceStackParam): choice is Essay  => {
      return 'question' in choice && 'answer' in choice;
    }

  return (
    <div className="w-full h-full bg-[#F5EFE7] justify-center flex flex-col items-center" style={{ width: screenSize.width, height: screenSize.height }}>
          <div className="w-full flex items-center content-center justify-around bg-[#0E2954]" style={{ width: screenSize.width, height: 40 }}>
              {screenSize.width < 586 ?
               <div className="text-white">Teacher icon </div> :
               <div className="text-white">Teacher name Here</div>
              }
              {screenSize.width < 586 ?
               <div className="text-white">Quiz name here</div> :
               <div className="text-white">Quiz name Here</div>
               
              }
              {screenSize.width < 586 ?
               <div className="text-white flex flex-row w-24 justify-between">
                <div>Hello</div>
                <BsPlusSquare size={24}/> 
                </div> :
                <>
                <div onClick={() => setCounter(counter + 1)}>Hello</div>
               <div className="text-white" onClick={() => addChoice(counter)}>Quiz option Here</div>
               </>
               
              }
              
          </div>
        
           <div className="w-full h-full bg-white rounded-md overflow-auto mt-2 mb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" style={{width: screenSize.width < 864 ? "100%" :"50%" , height: screenSize.height, }}>
           {/* <p style={{height:1000}} >{screenSize.height}</p>
          <p>{screenSize.width}</p> */}
          {choiceStack.map((list) => {

            return (  
              <div>
                <li key={list.id}>
            {/* Check the type of choice and render accordingly */}
            {MultipleChoiceType(list) && (
              <div>
                Type: Choice A
                <div>Name: {list.type}</div>
              </div>
            )}
            {EssayType(list) && (
              <div>
                Type: Choice B
                <div>Title: {list.question}</div>
                <div>Description: {list.answer}</div>
              </div>
            )}
            
          </li>
              </div>
            )
          })}
           </div>
         
          
        
  </div>
      
  )
}

export default Home_page