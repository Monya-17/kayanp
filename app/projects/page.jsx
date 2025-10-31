'use client'

import { motion } from 'framer-motion'
import { Upload, Link as LinkIcon, FileText, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProjectsPage() {
  const [uploadType, setUploadType] = useState('link')
  const [projectLink, setProjectLink] = useState('')
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      router.push('/feedback')
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="mb-6"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-royal-blue mb-2">Project Submitted!</h2>
            <p className="text-gray-600">Your project is being reviewed by our judges.</p>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-light-gray p-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-royal-blue mb-2">Upload Your Project</h1>
          <p className="text-gray-600 mb-8">
            Submit your work for evaluation. Our expert judges will provide detailed feedback.
          </p>

          {/* Upload Type Toggle */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setUploadType('link')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                uploadType === 'link'
                  ? 'bg-royal-blue text-white'
                  : 'bg-light-gray text-gray-600'
              }`}
            >
              <LinkIcon className="w-5 h-5" />
              Git/Behance Link
            </button>
            <button
              onClick={() => setUploadType('file')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                uploadType === 'file'
                  ? 'bg-royal-blue text-white'
                  : 'bg-light-gray text-gray-600'
              }`}
            >
              <FileText className="w-5 h-5" />
              Upload Files
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {uploadType === 'link' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Link (GitHub, Behance, etc.)
                </label>
                <input
                  type="url"
                  value={projectLink}
                  onChange={(e) => setProjectLink(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none"
                  placeholder="https://github.com/username/project"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Project Files
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-royal-blue transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    Drag and drop files here, or click to select
                  </p>
                  <p className="text-sm text-gray-500">
                    Max file size: 50MB (ZIP, PDF, images)
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    multiple
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-block mt-4 px-6 py-2 bg-royal-blue text-white rounded-lg cursor-pointer hover:bg-opacity-90"
                  >
                    Choose Files
                  </label>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comment (Optional)
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none resize-none"
                placeholder="Tell us about your project, challenges you faced, or what you'd like feedback on..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-royal-blue text-white py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Submit for Evaluation
            </motion.button>
          </form>

          <div className="mt-8 p-4 bg-light-gray rounded-lg">
            <h3 className="font-semibold text-royal-blue mb-2">What to expect:</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Detailed feedback within 24-48 hours</li>
              <li>• Star rating based on quality and effort</li>
              <li>• Constructive suggestions for improvement</li>
              <li>• Badge upon successful completion</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
