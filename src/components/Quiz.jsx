import {useState} from "react";


export default function Quiz (){
// const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
const [userAnswer, setUserAnswer] = useState([]);

const activeQuestionIndex = userAnswer.length;

    return <p>Currently active Question</p>;
}