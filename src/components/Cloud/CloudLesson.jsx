import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cloudPractitioner } from '../../data/cloud/cloudPractitioner'

const courses = {
  'cloud-practitioner': cloudPractitioner
}

export default function CloudLesson() {
  const { courseId, lessonId } = useParams()
  const course = courses[courseId]
  const [sidebarOpen, setSidebarOpen] = useState(true)

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link to="/cloud" className="text-orange-400 hover:text-orange-300">← Back to Cloud Certifications</Link>
        </div>
      </div>
    )
  }

  // Find current lesson
  let currentLesson = null
  let currentDomain = null
  let lessonIndex = 0
  let totalLessons = 0

  for (const domain of course.domains) {
    for (const lesson of domain.lessons) {
      totalLessons++
      if (lesson.id === lessonId) {
        currentLesson = lesson
        currentDomain = domain
      }
      if (currentLesson) break
    }
    if (currentLesson) break
  }

  // Get flat list for prev/next
  const allLessons = []
  for (const domain of course.domains) {
    for (const lesson of domain.lessons) {
      allLessons.push({ ...lesson, domain: domain.name })
    }
  }

  const currentIndex = allLessons.findIndex(l => l.id === lessonId)
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

  if (!currentLesson) {
    // Redirect to first lesson
    if (allLessons.length > 0) {
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
            <Link
              to={`/cloud/${courseId}/${allLessons[0].id}`}
              className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
            >
              Start Course →
            </Link>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className={`bg-gray-800 border-r border-gray-700 flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'w-80' : 'w-12'}`}>
        {sidebarOpen ? (
          <div className="h-screen overflow-y-auto p-4">
            <div className="flex items-center justify-between mb-4">
              <Link to="/cloud" className="text-sm text-orange-400 hover:text-orange-300">← Cloud Certs</Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <h2 className="font-bold text-lg mb-2">{course.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{course.certificationCode}</p>

            {course.domains.map((domain) => (
              <div key={domain.name} className="mb-4">
                <div className="text-xs font-bold text-orange-400 uppercase tracking-wide mb-2">
                  {domain.name} ({domain.weight})
                </div>
                {domain.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/cloud/${courseId}/${lesson.id}`}
                    className={`block px-3 py-2 rounded-lg text-sm mb-1 transition ${
                      lesson.id === lessonId
                        ? 'bg-orange-500/20 text-orange-300 font-medium'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {lesson.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-full h-full flex items-center justify-center text-gray-400 hover:text-white"
          >
            ☰
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/cloud" className="hover:text-orange-400">Cloud</Link>
            <span className="mx-2">/</span>
            <Link to={`/cloud/${courseId}`} className="hover:text-orange-400">{course.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{currentLesson.title}</span>
          </div>

          {/* Domain Badge */}
          <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-bold rounded mb-4">
            {currentDomain.name}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-6">{currentLesson.title}</h1>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div className="text-gray-300 leading-relaxed text-lg">
              {currentLesson.content}
            </div>
          </div>

          {/* Key Concepts */}
          {currentLesson.keyConcepts && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-orange-400">Key Concepts</h2>
              <div className="space-y-3">
                {currentLesson.keyConcepts.map((concept, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-gray-200">{concept}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Points */}
          {currentLesson.keyPoints && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-yellow-400">Key Points</h2>
              <div className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                <ul className="space-y-2">
                  {currentLesson.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-yellow-400 mt-1">→</span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Examples */}
          {currentLesson.examples && currentLesson.examples.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-blue-400">Examples</h2>
              {currentLesson.examples.map((example, i) => (
                <div key={i} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 mb-4">
                  <div className="px-4 py-2 bg-gray-750 border-b border-gray-700 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-300">{example.title}</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-green-400">{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}

          {/* Pro Tips */}
          {currentLesson.proTips && currentLesson.proTips.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-purple-400">Pro Tips</h2>
              <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                <ul className="space-y-2">
                  {currentLesson.proTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">💡</span>
                      <span className="text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-700">
            {prevLesson ? (
              <Link
                to={`/cloud/${courseId}/${prevLesson.id}`}
                className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
              >
                ← {prevLesson.title}
              </Link>
            ) : (
              <div />
            )}
            {nextLesson ? (
              <Link
                to={`/cloud/${courseId}/${nextLesson.id}`}
                className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition flex items-center gap-2"
              >
                {nextLesson.title} →
              </Link>
            ) : (
              <div className="px-6 py-3 bg-green-500/20 text-green-300 rounded-lg">
                🎉 Course Complete!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
