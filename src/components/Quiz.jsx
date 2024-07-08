    import {useCallback, useRef, useState} from "react";
import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import com from "../assets/quiz-complete.png";
import Answers from '../components/Answers.jsx'

export default function Quiz (){
    const shuffledAnswer = useRef();
    const [answerState, setAnswerState] = useState('');
// const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
const [userAnswer, setUserAnswer] = useState([]);

const activeQuestionIndex = answerState === ''? userAnswer.length :userAnswer.length -1 ;

const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
console.log(activeQuestionIndex);

const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
setAnswerState('answered')
setUserAnswer((prevUserAnswer) => {
    return[...prevUserAnswer,selectedAnswer];

})
    setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
            console.log(activeQuestionIndex);
            setAnswerState('correct');
        }
        else {
            setAnswerState('wrong');
        }
        setTimeout(() => {
            setAnswerState('');
        },2000);
    },1000)
},[activeQuestionIndex]);
const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);
if (quizIsComplete){
    return <div id="summary">
        <img src={com} alt="complete"/>
        <h2>Quiz Completed!</h2>
    </div>
}
if (!shuffledAnswer.current){
    shuffledAnswer.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswer.current.sort(() => Math.random() - 0.5);
}


    return (
        <div id="quiz">
    <div id = "question">
        <QuestionTimer
            key = {activeQuestionIndex}
            timeout={10000}
            ontimeout={handleSkipAnswer}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
<Answers answers={QUESTIONS[activeQuestionIndex].answers}/>
    </div>
        </div>
)
}