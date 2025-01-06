import { useState ,useCallback } from "react";
import QUESTION from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from "./Question"; 


export default function Quiz(){


    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex =  userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTION.length;



   const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer){

        setUserAnswers((prevUserAnswers)=>{
            console.log('Handle select answer is running '+activeQuestionIndex);
            return(
                [...prevUserAnswers,selectedAnswer]
            );
        });
    },[]);

    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete){
        return(
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon"/>
                <h2>Quiz Completed !</h2>
            </div>
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