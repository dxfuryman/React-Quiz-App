import {useState} from "react";
import QUESTIONS from "../questions.js";

export default function Quiz (){
// const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
const [userAnswer, setUserAnswer] = useState([]);

const activeQuestionIndex = userAnswer.length;
const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
shuffledAnswer.sort(() => Math.random() - 0.5);
const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

function handleSelectAnswer(selectedAnswer){
setUserAnswer((prevUserAnswer) => {
    return[...prevUserAnswer,selectedAnswer];
})
}
if (quizIsComplete){
    return <div id="summary">
        <img src={completed}/>
        <h2>Quiz Completed!</h2>
    </div>
}
    return (
        <div id="quiz">
    <div id = "question">
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