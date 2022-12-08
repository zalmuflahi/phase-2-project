import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Quiz = () => {
    const navigate = useNavigate()
    const questions = [
        {
            questionText: 'How many planets are there in the Solar System?',
            answerOptions: [
                { answerText: '7', isCorrect: false },
                { answerText: '8', isCorrect: true },
                { answerText: '9', isCorrect: false },
                { answerText: '10', isCorrect: false },
            ],
        },
        {
            questionText: 'What planet is closest to the sun?',
            answerOptions: [
                { answerText: 'Mars', isCorrect: false },
                { answerText: 'Mercury', isCorrect: true },
                { answerText: 'Earth', isCorrect: false },
                { answerText: 'Venus', isCorrect: false },
            ],
        },
        {
            questionText: 'Which planet is not a gas giant?',
            answerOptions: [
                { answerText: 'Neptune', isCorrect: false },
                { answerText: 'Saturn', isCorrect: false },
                { answerText: 'Mars', isCorrect: true },
                { answerText: 'Jupiter', isCorrect: false },
            ],
        },
        {
            questionText: 'Which planet has the largest ring system?',
            answerOptions: [
                { answerText: 'Jupiter', isCorrect: false },
                { answerText: 'Pluto', isCorrect: false },
                { answerText: 'Mercury', isCorrect: false },
                { answerText: 'Saturn', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div>
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                        
                </>
            )}
        </div>
            <button className='button' onClick={() => navigate('/solar')}>Main Page</button>
        </div>
    );
}
  




export default Quiz