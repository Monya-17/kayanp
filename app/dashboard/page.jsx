'use client'

import { motion } from 'framer-motion'
import { Play, Upload, TrendingUp, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const progress = 45 // Example progress percentage
  const currentLesson = {
    title: 'Introduction to Digital Marketing',
    duration: '15 min',
    progress: 60,
  }
  const nextProject = {
    title: 'Social Media Campaign Project',
    deadline: 'In 3 days',
  }
  const tips = [
    '💡 Tip: Practice SEO keywords daily for better retention',
    '🎯 Goal: Complete at least 3 exercises this week',
    '⭐ Achievement: You\'re in the top 20% of learners!',
  ]

  return (
    <div className="min-h-screen bg-light-gray p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-6"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-royal-blue mb-2">
                Welcome back! 👋
              </h1>
              <p className="text-gray-600">Continue your Digital Marketing journey</p>
            </div>
            <div className="text-right">
              <Link href="/portfolio" className="text-royal-blue hover:underline font-semibold">
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-royal-blue">Your Progress</h2>
            <span className="text-3xl font-bold text-warm-orange">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-gradient-to-r from-royal-blue to-warm-orange h-4 rounded-full"
            />
          </div>
          <p className="text-sm text-gray-600">
            {progress}% of your path completed • Keep going! 🚀
          </p>
        </motion.div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Current Lesson */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-royal-blue bg-opacity-10 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-royal-blue" />
              </div>
              <div>
                <h3 className="text-sm text-gray-600 uppercase">Current Lesson</h3>
                <h2 className="text-xl font-bold text-royal-blue">{currentLesson.title}</h2>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-royal-blue font-semibold">{currentLesson.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-royal-blue h-2 rounded-full"
                  style={{ width: `${currentLesson.progress}%` }}
                />
              </div>
            </div>
            <p className="text-gray-600 mb-4">Duration: {currentLesson.duration}</p>
            <button className="w-full bg-royal-blue text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Lesson
            </button>
          </motion.div>

          {/* Next Project */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-warm-orange bg-opacity-10 p-3 rounded-lg">
                <Upload className="w-6 h-6 text-warm-orange" />
              </div>
              <div>
                <h3 className="text-sm text-gray-600 uppercase">Next Project</h3>
                <h2 className="text-xl font-bold text-royal-blue">{nextProject.title}</h2>
              </div>
            </div>
            <div className="bg-warm-orange bg-opacity-10 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-warm-orange">Deadline:</span> {nextProject.deadline}
              </p>
            </div>
            <Link href="/projects">
              <button className="w-full bg-warm-orange text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Your Project
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Today's Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-royal-blue to-warm-orange rounded-2xl shadow-xl p-6 text-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Today's Tips</h2>
          </div>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white bg-opacity-20 rounded-lg p-4"
              >
                {tip}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Link href="/marketplace">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-2">💼</div>
              <p className="font-semibold text-royal-blue">Marketplace</p>
            </motion.div>
          </Link>
          <Link href="/portfolio">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-2">📁</div>
              <p className="font-semibold text-royal-blue">Portfolio</p>
            </motion.div>
          </Link>
          <Link href="/plans">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-2">⭐</div>
              <p className="font-semibold text-royal-blue">Upgrade Plan</p>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}
