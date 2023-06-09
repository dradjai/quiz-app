import { useState } from "react";
import QuizResult from "./QuizResult";
import QuizCard from "./QuizCard";
import quizData from "../data/quiz.json";


export default function Quiz() {
  const [showResult, setShowResult] = useState();
  const [quizId, setQuizId] = useState(0);
  const [score, setScore] = useState(0);
  const quizLength = quizData.length;


  const handleAnswer = (isCorrect) => {
    if (isCorrect === true) setScore(score+1);
    const newQuizId = quizId + 1;

    if(newQuizId < quizLength)
    setQuizId(newQuizId)
    else
    setShowResult(true);

  }

  const handleReset = () => {
    setShowResult(false);
    setScore(0);
    setQuizId(0);
  }

  return(
    <>
    {
      (showResult)
      ? (<QuizResult score={score} quizLength={quizLength} handleReset={handleReset}/>)
      : (<QuizCard 
        quizData={quizData}
        quizId={quizId}
        quizLength={quizLength}
        handleAnswer={handleAnswer} />)
    }
      
    </>
  )
}