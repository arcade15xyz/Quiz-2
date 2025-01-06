import { useState ,useCallback } from "react";
import QUESTION from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from "./Question"; 


export default function Quiz(){

    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length -1;

    const quizIsComplete = activeQuestionIndex === QUESTION.length;



   const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer){
        setAnswerState('answered');
        setUserAnswers((prevUserAnswers)=>{
            console.log('Handle select answer is running '+activeQuestionIndex);
            return(
                [...prevUserAnswers,selectedAnswer]
            );
        });
        setTimeout(()=>{
            if(selectedAnswer === QUESTION[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }
            else{setAnswerState('wrong');}
            setTimeout(()=>{
                setAnswerState('');
            },2000)
        },1000)
    },[activeQuestionIndex]);

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
                questionText = {QUESTION[activeQuestionIndex].text}
                answers = {QUESTION[activeQuestionIndex].answers}
                onSelectAnswer = {handleSelectAnswer}
                onSkipAnswer = {handleSkipAnswer}
                answerState={answerState}
            />
        </div>
    )
}