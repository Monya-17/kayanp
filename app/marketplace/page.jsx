'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Filter } from 'lucide-react'
import { useState } from 'react'

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Digital Marketing', 'Web Development', 'Graphic Design', 'Content Writing']

  const opportunities = [
    {
      id: 1,
      title: 'Social Media Manager Needed',
      category: 'Digital Marketing',
      type: 'Freelance',
      location: 'Remote',
      budget: '$500 - $800',
      duration: '2 weeks',
      description: 'Looking for an experienced social media manager to handle Instagram and Facebook accounts for a growing e-commerce brand.',
      skills: ['Social Media', 'Content Creation', 'Analytics'],
    },
    {
      id: 2,
      title: 'WordPress Website Development',
      category: 'Web Development',
      type: 'Project',
      location: 'Remote',
      budget: '$1,200 - $1,800',
      duration: '3 weeks',
      description: 'Create a modern WordPress website for a local business. Must have experience with WooCommerce.',
      skills: ['WordPress', 'PHP', 'WooCommerce'],
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      type: 'Freelance',
      location: 'Remote',
      budget: '$600 - $1,000',
      duration: '1 week',
      description: 'Design a complete brand identity including logo, color palette, and brand guidelines for a startup.',
      skills: ['Logo Design', 'Branding', 'Adobe Illustrator'],
    },
    {
      id: 4,
      title: 'SEO Content Writer',
      category: 'Content Writing',
      type: 'Ongoing',
      location: 'Remote',
      budget: '$300 - $500/month',
      duration: 'Ongoing',
      description: 'Need a skilled SEO content writer to create blog posts and website content for a tech company.',
      skills: ['SEO', 'Content Writing', 'Tech Writing'],
    },
  ]

  const filteredOpportunities = selectedCategory === 'All' 
    ? opportunities 
    : opportunities.filter(opp => opp.category === selectedCategory)

  return (
    <div className="min-h-screen bg-light-gray p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-royal-blue" />
            <h1 className="text-3xl font-bold text-royal-blue">Marketplace</h1>
          </div>
          <p className="text-gray-600">
            Discover freelance opportunities and projects that match your skills
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-4 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-700">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-royal-blue text-white'
                    : 'bg-light-gray text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredOpportunities.map((opp, index) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-royal-blue mb-2">{opp.title}</h3>
                  <span className="inline-block px-3 py-1 bg-warm-orange bg-opacity-20 text-warm-orange rounded-full text-sm font-semibold mb-2">
                    {opp.category}
                  </span>
                </div>
                <span className="px-3 py-1 bg-royal-blue bg-opacity-10 text-royal-blue rounded-full text-xs font-semibold">
                  {opp.type}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{opp.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{opp.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-semibold text-royal-blue">{opp.budget}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{opp.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {opp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-light-gray text-gray-700 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full bg-royal-blue text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-12 text-center"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-royal-blue mb-2">No opportunities found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
