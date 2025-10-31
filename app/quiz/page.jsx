'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const questions = [
  {
    id: 1,
    question: 'What field interests you the most?',
    options: ['Digital Marketing', 'Web Development', 'Graphic Design', 'Data Science', 'Business Management'],
  },
  {
    id: 2,
    question: 'How many hours can you dedicate to learning per week?',
    options: ['1-5 hours', '5-10 hours', '10-15 hours', '15+ hours'],
  },
  {
    id: 3,
    question: 'Do you prefer learning through videos or practical projects?',
    options: ['Videos only', 'Mostly videos with some projects', 'Equal mix of both', 'Mostly practical projects', 'Projects only'],
  },
  {
    id: 4,
    question: 'What is your current skill level?',
    options: ['Complete beginner', 'Some basic knowledge', 'Intermediate', 'Advanced', 'Expert'],
  },
  {
    id: 5,
    question: 'What motivates you most?',
    options: ['Career advancement', 'Learning new skills', 'Building projects', 'Earning money', 'Personal growth'],
  },
  {
    id: 6,
    question: 'How do you prefer to receive feedback?',
    options: ['Written comments', 'Video reviews', 'Live sessions', 'Graded assessments', 'Peer reviews'],
  },
  {
    id: 7,
    question: 'What type of projects excite you?',
    options: ['Real client projects', 'Portfolio building', 'Open source contributions', 'Competition projects', 'Personal projects'],
  },
  {
    id: 8,
    question: 'What is your primary goal?',
    options: ['Land a job', 'Start freelancing', 'Switch careers', 'Learn for fun', 'Start a business'],
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const router = useRouter()

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        router.push('/results')
      }
    }, 300)
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (
    <div className="min-h-screen bg-light-gray p-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/signup" className="inline-flex items-center text-royal-blue mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-royal-blue">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-gradient-to-r from-royal-blue to-warm-orange h-3 rounded-full"
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-royal-blue mb-8">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    answers[currentQuestion] === index
                      ? 'border-royal-blue bg-royal-blue bg-opacity-10'
                      : 'border-gray-200 hover:border-warm-orange'
                  }`}
                >
                  <span className="text-gray-700 font-medium">{option}</span>
                </motion.button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={goBack}
                disabled={currentQuestion === 0}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  currentQuestion === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-light-gray text-royal-blue hover:bg-gray-200'
                }`}
              >
                <ArrowLeft className="w-4 h-4 inline mr-2" />
                Previous
              </button>

              {answers[currentQuestion] !== undefined && (
                <button
                  onClick={() => {
                    if (currentQuestion < questions.length - 1) {
                      setCurrentQuestion(currentQuestion + 1)
                    } else {
                      router.push('/results')
                    }
                  }}
                  className="px-6 py-2 bg-royal-blue text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center"
                >
                  {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
