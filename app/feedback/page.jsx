'use client'

import { motion } from 'framer-motion'
import { Star, Award, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function FeedbackPage() {
  const router = useRouter()
  const rating = 4.5 // Example rating
  const feedback = {
    project: 'Social Media Campaign Project',
    judge: 'Sarah Ahmed',
    rating: 4.5,
    notes: `Excellent work on your social media campaign! Your strategy shows a deep understanding of target audience engagement. 

The visual design is compelling and aligns well with the brand identity. Your content calendar demonstrates thoughtful planning.

**Areas for improvement:**
- Consider A/B testing different ad formats
- Expand your hashtag research to reach broader audiences
- Include more analytics and metrics in your report

Overall, this is a strong project that shows real-world marketing skills. Keep up the great work!`,
    badge: 'Project Completed',
  }

  return (
    <div className="min-h-screen bg-light-gray p-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-6"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="mb-4"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-3xl font-bold text-royal-blue mb-2">
                Project Feedback Received!
              </h1>
              <p className="text-gray-600">{feedback.project}</p>
            </motion.div>
          </div>

          {/* Star Rating */}
          <div className="bg-light-gray rounded-xl p-6 mb-6 text-center">
            <p className="text-sm text-gray-600 mb-3">Judge's Rating</p>
            <div className="flex justify-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + star * 0.1, type: 'spring' }}
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= Math.floor(feedback.rating)
                        ? 'fill-warm-orange text-warm-orange'
                        : star === Math.ceil(feedback.rating) && feedback.rating % 1 >= 0.5
                        ? 'fill-warm-orange text-warm-orange opacity-50'
                        : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-2xl font-bold text-royal-blue">
              {feedback.rating} out of 5 stars
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Reviewed by {feedback.judge}
            </p>
          </div>

          {/* Written Feedback */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-royal-blue mb-4">Feedback Notes</h2>
            <div className="bg-light-gray rounded-xl p-6">
              <div className="prose max-w-none whitespace-pre-wrap text-gray-700 leading-relaxed">
                {feedback.notes}
              </div>
            </div>
          </div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
            className="bg-gradient-to-r from-royal-blue to-warm-orange rounded-xl p-6 text-white text-center mb-6"
          >
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{feedback.badge}</h3>
            <p className="opacity-90">
              Congratulations! You've successfully completed this project.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link href="/portfolio" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-royal-blue text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/dashboard" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-light-gray text-royal-blue py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Back to Dashboard
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h3 className="text-xl font-bold text-royal-blue mb-4">What's Next?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
              <p className="text-gray-700">
                Continue to your next lesson and project
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
              <p className="text-gray-700">
                Add this project to your portfolio to showcase your skills
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
              <p className="text-gray-700">
                Explore freelance opportunities in the marketplace
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
