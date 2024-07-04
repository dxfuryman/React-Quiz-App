import {useCallback, useState} from "react";
import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import com from "../assets/quiz-complete.png";

export default function Quiz (){
// const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
const [userAnswer, setUserAnswer] = useState([]);

const activeQuestionIndex = userAnswer.length;

const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
setUserAnswer((prevUserAnswer) => {
    return[...prevUserAnswer,selectedAnswer];
})
},[]);
const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);
if (quizIsComplete){
    return <div id="summary">
        <img src={com} alt="complete"/>
        <h2>Quiz Completed!</h2>
    </div>
}
    const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswer.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
    <div id = "question">
        <QuestionTimer
            key = {activeQuestionIndex}
            timeout={10000}
            ontimeout={handleSkipAnswer}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {shuffledAnswer.map((answer) => (
                <li key={answer} className="answer">
                    <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                </li>
            ))}
        </ul>
    </div>
        </div>
)
}