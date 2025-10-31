'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Check, Play, Upload } from 'lucide-react'

export default function ResultsPage() {
  const router = useRouter()
  
  const trainingPlan = [
    {
      week: 'Week 1',
      tasks: [
        { type: 'Video', title: 'Introduction to Digital Marketing', duration: '15 min' },
        { type: 'Exercise', title: 'Create your first marketing strategy', duration: '30 min' },
        { type: 'Project', title: 'Mini Project: Social Media Campaign', duration: '2 hours' },
      ],
    },
    {
      week: 'Week 2',
      tasks: [
        { type: 'Video', title: 'SEO Fundamentals', duration: '20 min' },
        { type: 'Exercise', title: 'Keyword Research Practice', duration: '45 min' },
        { type: 'Project', title: 'Project: SEO Audit Report', duration: '3 hours' },
      ],
    },
    {
      week: 'Week 3',
      tasks: [
        { type: 'Video', title: 'Content Marketing Strategy', duration: '25 min' },
        { type: 'Exercise', title: 'Content Calendar Creation', duration: '1 hour' },
        { type: 'Project', title: 'Project: Blog Content Series', duration: '4 hours' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-light-gray p-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="text-center mb-8"
          >
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold text-royal-blue mb-4">
              Welcome! Based on your answers, we've found that{' '}
              <span className="text-warm-orange">Digital Marketing</span> is the right path for you.
            </h1>
            <p className="text-gray-600 text-lg">
              Your personalized learning journey is ready to begin!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-royal-blue to-warm-orange rounded-xl p-6 text-white mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Your Training Plan</h2>
            <p className="mb-6">A step-by-step plan designed specifically for your goals and learning style.</p>
            
            <div className="space-y-4">
              {trainingPlan.map((week, weekIndex) => (
                <div key={weekIndex} className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-bold text-xl mb-3">{week.week}</h3>
                  <div className="space-y-2">
                    {week.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center gap-3 bg-white bg-opacity-10 rounded-lg p-3">
                        {task.type === 'Video' && <Play className="w-5 h-5" />}
                        {task.type === 'Exercise' && <Check className="w-5 h-5" />}
                        {task.type === 'Project' && <Upload className="w-5 h-5" />}
                        <div className="flex-1">
                          <span className="font-semibold">{task.title}</span>
                          <span className="text-sm opacity-90 ml-2">({task.duration})</span>
                        </div>
                        <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
                          {task.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/dashboard')}
            className="w-full bg-royal-blue text-white py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Start Learning Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
