\]; import {useEffect, useState} from "react";


export default function QuestionTimer({timeout, ontimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(()  => {
        console.log("SETTING TIMEOUT")
        setTimeout(ontimeout,timeout);
    }, [timeout , ontimeout]);

    useEffect(() => {
        setInterval(() =>{
            console.log("SETTING INTERVAL")
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        },100);
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime}/>
}