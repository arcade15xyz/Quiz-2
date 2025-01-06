import { useState } from "react";

import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTION from '../questions';

export default function Question({
  index,
  onSelectAnswer,
  onSkipAnswer}){

  const [answer,setAnswer] = useState(
      {
        selectedAnswer:'',
        isCorrect:null
      }
    );

    function handleSelectAnswer(){
      setAnswer({
        selectedAnswer:answer,
        isCorrect:null
      })
      setTimeout(()=>{
        setAnswer({
          selectedAnswer: answer,
          isCorrect: QUESTION[index].answers[0] === answer
        })


        setTimeout(()=>{
          onSelectAnswer(answer);
        },1000)
      },1000)
    }

    let answerState = '' ;
    if(answer.selectedAnswer && answer.isCorrect !== null){
      answerState = answer.isCorrect?'correct':'wrong';
    }
    else if(answer.selectedAnswer){
      answerState = 'answered';
    }
  
  return <div id="question">
          
            <QuestionTimer 
            
            timeout={10000} 
            onTimeout={onSkipAnswer}
             />
             <h2>{QUESTION[index].text}</h2>
             <Answers
                
                answers={QUESTION[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
             />
  </div>
}