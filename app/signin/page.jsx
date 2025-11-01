'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../components/Logo'

export default function SignInPage() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <Link href="/" className="inline-flex items-center text-royal-blue mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-8">
          <Logo size="lg" className="mb-4" />
          <p className="text-gray-600">{isSignUp ? 'Create your account' : 'Welcome back!'}</p>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setIsSignUp(false)}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
              !isSignUp
                ? 'bg-royal-blue text-white'
                : 'bg-light-gray text-gray-600'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
              isSignUp
                ? 'bg-royal-blue text-white'
                : 'bg-light-gray text-gray-600'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isSignUp ? 'Full Name' : 'Email'}
            </label>
            <input
              type={isSignUp ? 'text' : 'email'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none"
              placeholder={isSignUp ? 'Enter your full name' : 'Enter your email'}
              required
            />
          </div>

          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-royal-blue text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </motion.button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-light-gray transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-light-gray transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-.96-1.24 0-2 .5-3.04.99-1.36.63-2.5.73-3.54-.27C1.2 18.25.57 16.5.57 14.65c0-1.26.4-2.4 1.14-3.4.75-1.01 1.73-1.72 2.86-2.13 1.1-.4 2.22-.43 3.4-.18.47.1.94.27 1.38.5.4.21.8.49 1.18.82.29-.08.58-.18.87-.26 1.42-.36 2.78-.37 4.1-.01.56.15 1.1.36 1.61.64.5.28.97.62 1.4 1.03.16.15.31.3.44.47 1.28 1.8 1.23 4.06-.17 5.83zm.13-16.58c.55-.55 1.2-1.02 1.76-1.58.37-.37.7-.79.97-1.26-.8.29-1.61.71-2.35 1.26-.55.44-1.06.96-1.5 1.51-.41.52-.74 1.08-1 1.66.45-.22.9-.48 1.33-.79.41-.29.78-.63 1.1-1z"/>
            </svg>
            Continue with Apple
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
