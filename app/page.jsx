'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Logo from './components/Logo'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Logo size="md" />
          </motion.div>
          <Link href="/signin">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-royal-blue hover:bg-royal-blue hover:text-white rounded-lg transition-colors"
            >
              Sign In
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-royal-blue mb-6"
            >
              Start Your Career Journey Step by Step 🚀
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-royal-blue">Smart Training Paths</span> - Personalized learning journeys tailored to your goals
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-royal-blue">Real-Life Practical Projects</span> - Build your portfolio with real-world experience
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warm-orange rounded-full mt-2"></div>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-royal-blue">Personalized Mentoring and Follow-up</span> - Get expert guidance every step of the way
                </p>
              </div>
            </motion.div>

            <Link href="/signup">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,91,150,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-royal-blue text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-colors"
              >
                Start Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-royal-blue to-warm-orange rounded-3xl shadow-2xl flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-white text-center"
              >
                <div className="text-8xl mb-4">🎯</div>
                <p className="text-2xl font-bold">Your Future Starts Here</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
