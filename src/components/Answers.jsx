
export default function Answers({answers, selectedAnswer, answerState}){
    return (
        <ul id="answers">
            {shuffledAnswer.current.map((answer) => {
                    const isSelected = userAnswer[userAnswer.length - 1] ===answer;
                    let cssClasses ='';
                    if (answerState === 'answered' && isSelected){
                        cssClasses = 'selected';
                    }
                    if ((answerState === 'correct'|| answerState === 'wrong') && isSelected){
                        cssClasses = answerState;
                    }
                    return (
                        <li key={answer} className="answer">
                            <button
                                onClick={() => handleSelectAnswer(answer)}
                                className={cssClasses}
                            >{answer}
                            </button>
                        </li>
                    )
                }

            )}
        </ul>
    )
}