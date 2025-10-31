'use client'

import { motion } from 'framer-motion'
import { Award, Share2, Copy, Check, ExternalLink, Trophy } from 'lucide-react'
import { useState } from 'react'

export default function PortfolioPage() {
  const [copied, setCopied] = useState(false)
  const portfolioLink = 'https://kayan.com/portfolio/user123'

  const completedProjects = [
    {
      id: 1,
      title: 'Social Media Campaign Project',
      field: 'Digital Marketing',
      date: '2024-01-15',
      rating: 4.5,
      link: 'https://behance.net/project1',
    },
    {
      id: 2,
      title: 'SEO Audit Report',
      field: 'Digital Marketing',
      date: '2024-01-10',
      rating: 4.0,
      link: 'https://github.com/project2',
    },
    {
      id: 3,
      title: 'Content Marketing Strategy',
      field: 'Digital Marketing',
      date: '2024-01-05',
      rating: 5.0,
      link: 'https://behance.net/project3',
    },
  ]

  const certificates = [
    {
      id: 1,
      name: 'Digital Marketing Fundamentals',
      date: 'January 2024',
      issuer: 'Kayan Platform',
    },
    {
      id: 2,
      name: 'Social Media Marketing',
      date: 'December 2023',
      issuer: 'Kayan Platform',
    },
  ]

  const badges = [
    { id: 1, name: 'First Project Completed', icon: '🎯' },
    { id: 2, name: 'Perfect Score', icon: '⭐' },
    { id: 3, name: 'Consistent Learner', icon: '🔥' },
    { id: 4, name: 'Top Performer', icon: '🏆' },
  ]

  const handleCopyLink = () => {
    navigator.clipboard.writeText(portfolioLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-light-gray p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-6"
        >
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-royal-blue mb-2">My Portfolio</h1>
              <p className="text-gray-600">Showcase your completed projects and achievements</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleCopyLink}
                className="px-4 py-2 bg-light-gray text-royal-blue rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Link
                  </>
                )}
              </button>
              <button className="px-4 py-2 bg-royal-blue text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
          {copied && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-gray-600 bg-light-gray p-3 rounded-lg"
            >
              Portfolio link: <span className="font-mono text-royal-blue">{portfolioLink}</span>
            </motion.p>
          )}
        </motion.div>

        {/* Completed Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-royal-blue mb-6">Completed Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-royal-blue mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.field}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-warm-orange">⭐</span>
                    <span className="font-semibold text-gray-700">{project.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-3">Completed: {new Date(project.date).toLocaleDateString()}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royal-blue text-sm font-semibold hover:underline flex items-center gap-1"
                >
                  View Project <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates & Badges */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-warm-orange" />
              <h2 className="text-2xl font-bold text-royal-blue">Certificates</h2>
            </div>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="border-l-4 border-warm-orange pl-4 py-2"
                >
                  <h3 className="font-bold text-royal-blue">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-warm-orange" />
              <h2 className="text-2xl font-bold text-royal-blue">Badges</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                  className="bg-gradient-to-br from-royal-blue to-warm-orange rounded-xl p-4 text-white text-center"
                >
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <p className="text-sm font-semibold">{badge.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
