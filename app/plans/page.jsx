'use client'

import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Star } from 'lucide-react'
import { useState } from 'react'

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState('free')

  const plans = {
    free: {
      name: 'Free Plan',
      price: '$0',
      period: 'Forever',
      description: 'Perfect for getting started',
      features: [
        { name: 'Access to basic training paths', included: true },
        { name: 'Limited practical projects', included: true },
        { name: 'Standard evaluation time (48-72 hours)', included: true },
        { name: 'Basic progress tracking', included: true },
        { name: 'Access to community forum', included: true },
        { name: 'Large-scale projects', included: false },
        { name: 'Priority evaluation (24 hours)', included: false },
        { name: 'Access to premium job market', included: false },
        { name: '1-on-1 mentoring sessions', included: false },
        { name: 'Advanced analytics dashboard', included: false },
        { name: 'Certificate upon completion', included: false },
      ],
      buttonText: 'Current Plan',
      buttonDisabled: true,
    },
    paid: {
      name: 'Premium Plan',
      price: '$29',
      period: 'per month',
      description: 'Unlock your full potential',
      features: [
        { name: 'Access to all training paths', included: true },
        { name: 'Unlimited practical projects', included: true },
        { name: 'Fast evaluation (24 hours)', included: true },
        { name: 'Advanced progress tracking', included: true },
        { name: 'Priority access to community', included: true },
        { name: 'Large-scale projects', included: true },
        { name: 'Priority evaluation (24 hours)', included: true },
        { name: 'Access to premium job market', included: true },
        { name: '1-on-1 mentoring sessions', included: true },
        { name: 'Advanced analytics dashboard', included: true },
        { name: 'Verified certificate upon completion', included: true },
      ],
      buttonText: 'Upgrade Now',
      buttonDisabled: false,
    },
  }

  return (
    <div className="min-h-screen bg-light-gray p-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-royal-blue mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600">
            Select the plan that best fits your learning journey
          </p>
        </motion.div>

        {/* Plans Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`bg-white rounded-2xl shadow-xl p-8 ${
              selectedPlan === 'free' ? 'ring-2 ring-royal-blue' : ''
            }`}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-royal-blue mb-2">
                {plans.free.name}
              </h2>
              <div className="mb-2">
                <span className="text-4xl font-bold text-royal-blue">
                  {plans.free.price}
                </span>
                <span className="text-gray-600 ml-2">
                  {plans.free.period}
                </span>
              </div>
              <p className="text-gray-600">{plans.free.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plans.free.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  )}
                  <span
                    className={
                      feature.included
                        ? 'text-gray-700'
                        : 'text-gray-400 line-through'
                    }
                  >
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedPlan('free')}
              disabled={plans.free.buttonDisabled}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plans.free.buttonDisabled
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : selectedPlan === 'free'
                  ? 'bg-royal-blue text-white'
                  : 'bg-light-gray text-royal-blue hover:bg-gray-200'
              }`}
            >
              {plans.free.buttonText}
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`bg-gradient-to-br from-royal-blue to-warm-orange rounded-2xl shadow-xl p-8 text-white relative ${
              selectedPlan === 'paid' ? 'ring-4 ring-warm-orange' : ''
            }`}
          >
            <div className="absolute top-4 right-4 bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Star className="w-4 h-4" />
              Popular
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">{plans.paid.name}</h2>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plans.paid.price}</span>
                <span className="opacity-90 ml-2">{plans.paid.period}</span>
              </div>
              <p className="opacity-90">{plans.paid.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plans.paid.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>

            <motion.button
              onClick={() => setSelectedPlan('paid')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                selectedPlan === 'paid'
                  ? 'bg-white text-royal-blue'
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              } flex items-center justify-center gap-2`}
            >
              {plans.paid.buttonText}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Benefits Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-royal-blue mb-6 text-center">
            Why Upgrade to Premium?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-bold text-royal-blue mb-2">Faster Progress</h4>
              <p className="text-sm text-gray-600">
                Get your projects evaluated in 24 hours instead of 48-72 hours
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="font-bold text-royal-blue mb-2">More Opportunities</h4>
              <p className="text-sm text-gray-600">
                Access to premium job market with exclusive freelance opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-bold text-royal-blue mb-2">Expert Guidance</h4>
              <p className="text-sm text-gray-600">
                Get personalized 1-on-1 mentoring sessions with industry experts
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
