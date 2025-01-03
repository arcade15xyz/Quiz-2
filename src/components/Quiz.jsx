import { useState } from "react";
import QUESTION from '../questions'


export default function Quiz(){

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const shuffledAnswers = [...QUESTION[activeQuestionIndex].answers];
    shuffledAnswers.sort(()=>Math.random() - 0.5);

    function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers)=>{
            return(
                [...prevUserAnswers,selectedAnswer]
            );
        });
    }
    return (
        <div id="question">
            <h2>{QUESTION[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map(answer =>(
                    <li key={answer} className="answer">
                        <button 
                        onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}