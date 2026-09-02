import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react'
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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Course not found</h1>
          <Link to="/cloud" className="text-primary font-bold hover:underline">← Back to Cloud Certifications</Link>
        </div>
      </div>
    )
  }

  // Find current lesson
  let currentLesson = null
  let currentDomain = null

  for (const domain of course.domains) {
    for (const lesson of domain.lessons) {
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
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-2">{course.title}</h1>
            <p className="text-sm text-slate-500 mb-4">{course.certificationCode}</p>
            <Link
              to={`/cloud/${courseId}/${allLessons[0].id}`}
              className="inline-flex items-center gap-1 px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark transition"
            >
              Start Course →
            </Link>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className={`bg-white border-r border-slate-200 flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'w-80' : 'w-12'}`}>
        {sidebarOpen ? (
          <div className="h-screen overflow-y-auto p-4">
            <div className="flex items-center justify-between mb-4">
              <Link to="/cloud" className="text-sm text-primary hover:text-primary-dark flex items-center gap-1">
                <ArrowLeft size={14} /> Cloud Certs
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>
            <h2 className="font-bold text-lg text-slate-800 mb-1 flex items-center gap-2">
              <BookOpen size={16} className="text-primary" /> {course.title}
            </h2>
            <p className="text-sm text-slate-500 mb-4 font-mono">{course.certificationCode}</p>

            {course.domains.map((domain) => (
              <div key={domain.name} className="mb-4">
                <div className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                  {domain.name} ({domain.weight})
                </div>
                {domain.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/cloud/${courseId}/${lesson.id}`}
                    className={`block px-3 py-2 rounded-lg text-sm mb-1 transition ${
                      lesson.id === lessonId
                        ? 'bg-primary/5 text-primary font-semibold border-l-3 border-primary'
                        : 'text-slate-600 hover:text-primary hover:bg-slate-50'
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
            className="w-full h-full flex items-center justify-center text-slate-400 hover:text-primary"
          >
            ☰
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-10">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-4 px-6 rounded-xl shadow-md mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen size={18} />
                <span className="font-bold">{course.title}</span>
              </div>
              <span className="text-blue-200 text-sm font-mono">{course.certificationCode}</span>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="text-sm text-slate-500 mb-6">
            <Link to="/cloud" className="hover:text-primary">Cloud</Link>
            <span className="mx-2">/</span>
            <Link to={`/cloud/${courseId}`} className="hover:text-primary">{course.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">{currentLesson.title}</span>
          </div>

          {/* Domain Badge */}
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-4">
            {currentDomain.name}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-black text-slate-800 mb-6">{currentLesson.title}</h1>

          {/* Content */}
          <div className="text-slate-700 leading-relaxed text-lg mb-10">
            {currentLesson.content}
          </div>

          {/* Key Concepts */}
          {currentLesson.keyConcepts && currentLesson.keyConcepts.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-primary" /> Key Concepts
              </h2>
              <div className="space-y-3">
                {currentLesson.keyConcepts.map((concept, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-slate-200 text-slate-700">
                    {concept}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Points - w3schools Note style */}
          {currentLesson.keyPoints && currentLesson.keyPoints.length > 0 && (
            <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <h4 className="font-bold text-green-700 mb-2">Note:</h4>
              <ul className="space-y-2">
                {currentLesson.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="text-green-600 mt-1">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Examples - w3schools code style */}
          {currentLesson.examples && currentLesson.examples.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Examples</h2>
              {currentLesson.examples.map((example, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden border border-slate-200 mb-4">
                  <div className="px-4 py-2 bg-slate-50 border-b border-slate-200">
                    <span className="text-sm font-semibold text-slate-700">{example.title}</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto bg-slate-900 font-mono">
                    <code className="text-green-400">{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}

          {/* Pro Tips - w3schools Tip style */}
          {currentLesson.proTips && currentLesson.proTips.length > 0 && (
            <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h4 className="font-bold text-blue-700 mb-2">💡 Tip:</h4>
              <ul className="space-y-2">
                {currentLesson.proTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="text-blue-600 mt-1">→</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            {prevLesson ? (
              <Link
                to={`/cloud/${courseId}/${prevLesson.id}`}
                className="px-6 py-3 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition flex items-center gap-2 text-sm font-bold text-slate-600"
              >
                ← {prevLesson.title}
              </Link>
            ) : (
              <div />
            )}
            {nextLesson ? (
              <Link
                to={`/cloud/${courseId}/${nextLesson.id}`}
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition flex items-center gap-2 text-sm font-bold"
              >
                {nextLesson.title} <ChevronRight size={14} />
              </Link>
            ) : (
              <div className="px-6 py-3 bg-green-100 text-green-700 rounded-lg font-bold text-sm">
                🎉 Course Complete!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
