import {useEffect, useState} from "react";


export default function QuestionTimer({timeout, ontimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(()  => {
        console.log("SETTING TIMEOUT");
        const timer = setTimeout(ontimeout,timeout);
        return () => {
            clearTimeout(timer);
        }
    }, [timeout , ontimeout]);

    useEffect(() => {
        const interval = setInterval(() =>{
            console.log("SETTING INTERVAL")
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        },100);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime}/>
}