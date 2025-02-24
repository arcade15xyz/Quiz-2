import { useState ,useCallback } from "react";
import QUESTION from '../questions';
import Question from "./Question"; 
import Summary from "./Summary";

export default function Quiz(){


    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex =  userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTION.length;



   const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer){

        setUserAnswers((prevUserAnswers)=>{
            return(
                [...prevUserAnswers,selectedAnswer]
            );
        });
    },[]);

    console.log("QUIZ USERANSWERS IS " + userAnswers);
    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete){
        return(
            <Summary userAnswers={userAnswers}  />
        )
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSkipAnswer = {handleSkipAnswer}
                onSelectAnswer={handleSelectAnswer}
                selectedAnswer={userAnswers[userAnswers.length-1]}
            />
        </div>
    )
}