import { useState } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: string;
  questions: QuizQuestion[];
}

export function QuizModal({ isOpen, onClose, topic, questions }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  if (!isOpen) return null;

  const question = questions[currentQuestion];
  const userAnswer = selectedAnswers[currentQuestion];
  const isCorrect = userAnswer === question.correctAnswer;
  const allAnswered = selectedAnswers.length === questions.length;

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const correctCount = selectedAnswers.filter(
    (answer, idx) => answer === questions[idx].correctAnswer
  ).length;

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-8 text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            correctCount >= questions.length * 0.7
              ? 'bg-green-100 dark:bg-green-900'
              : 'bg-blue-100 dark:bg-blue-900'
          }`}>
            <span className={`text-3xl font-bold ${
              correctCount >= questions.length * 0.7
                ? 'text-green-600 dark:text-green-400'
                : 'text-blue-600 dark:text-blue-400'
            }`}>
              {Math.round((correctCount / questions.length) * 100)}%
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Quiz Complete!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You got {correctCount} out of {questions.length} questions correct
          </p>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswers([]);
              setShowResults(false);
              onClose();
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{topic} Quiz</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          >
            <X className="w-5 h-5 dark:text-gray-300" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            {question.question}
          </h3>

          <div className="space-y-3 mb-8">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectAnswer(idx)}
                className={`w-full text-left p-4 rounded-lg border-2 transition ${
                  userAnswer === idx
                    ? isCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-900 dark:border-green-400'
                      : 'border-red-500 bg-red-50 dark:bg-red-900 dark:border-red-400'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    userAnswer === idx
                      ? isCorrect
                        ? 'border-green-500 bg-green-500'
                        : 'border-red-500 bg-red-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {userAnswer === idx && (isCorrect ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : (
                      <XCircle className="w-4 h-4 text-white" />
                    ))}
                  </div>
                  <span className={`${
                    userAnswer === idx
                      ? isCorrect
                        ? 'text-green-700 dark:text-green-300 font-medium'
                        : 'text-red-700 dark:text-red-300 font-medium'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {userAnswer !== undefined && (
            <div className={`p-4 rounded-lg mb-6 ${
              isCorrect
                ? 'bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700'
                : 'bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700'
            }`}>
              <p className={`font-medium mb-2 ${
                isCorrect
                  ? 'text-green-700 dark:text-green-300'
                  : 'text-blue-700 dark:text-blue-300'
              }`}>
                {isCorrect ? 'Correct!' : 'Explanation'}
              </p>
              <p className={`text-sm ${
                isCorrect
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-blue-600 dark:text-blue-400'
              }`}>
                {question.explanation}
              </p>
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={userAnswer === undefined}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition"
          >
            {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
}
