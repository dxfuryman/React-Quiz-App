import {useEffect, useState} from "react";


export default function QuestionTimer({timeout, ontimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(()  => {
        setTimeout(ontimeout,timeout);
    }, [timeout , ontimeout]);

    useEffect(() => {
        setInterval(() =>{
            setRemainingTime(preRemainingTime => prevRemainingTime - 100);
        },100);
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime}/>
}