import { Link } from 'react-router-dom'

const courses = [
  {
    id: 'cloud-practitioner',
    title: 'Cloud Practitioner',
    code: 'CLF-C02',
    level: 'Beginner',
    lessons: 25,
    hours: 15,
    color: 'from-orange-500 to-yellow-500',
    icon: '☁️',
    description: 'Cloud computing fundamentals and AWS basics'
  },
  {
    id: 'cloud-developer',
    title: 'Cloud Developer',
    code: 'DVA-C02',
    level: 'Intermediate',
    lessons: 30,
    hours: 25,
    color: 'from-blue-500 to-cyan-500',
    icon: '💻',
    description: 'Building and deploying cloud-native applications'
  },
  {
    id: 'solutions-architect-associate',
    title: 'Solutions Architect Associate',
    code: 'SAA-C03',
    level: 'Intermediate',
    lessons: 35,
    hours: 30,
    color: 'from-purple-500 to-pink-500',
    icon: '🏗️',
    description: 'Designing cost-optimized, resilient architectures'
  },
  {
    id: 'solutions-architect-professional',
    title: 'Solutions Architect Professional',
    code: 'SAP-C02',
    level: 'Advanced',
    lessons: 35,
    hours: 40,
    color: 'from-red-500 to-orange-500',
    icon: '🎓',
    description: 'Complex organizational and migration architectures'
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    code: 'DOP-C02',
    level: 'Advanced',
    lessons: 30,
    hours: 35,
    color: 'from-green-500 to-teal-500',
    icon: '⚙️',
    description: 'CI/CD, monitoring, and infrastructure automation'
  }
]

export default function CloudHome() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">AWS Cloud Computing Certifications</h1>
          <p className="text-xl text-orange-100 mb-6">
            Master AWS from fundamentals to professional level. 5 certification paths. 155 lessons. 145+ hours.
          </p>
          <div className="flex justify-center gap-8 text-orange-100">
            <div className="text-center">
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">155</div>
              <div className="text-sm">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">145+</div>
              <div className="text-sm">Hours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Paths */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Certification Paths</h2>
        <div className="space-y-6">
          {courses.map((course, index) => (
            <Link
              key={course.id}
              to={`/cloud/${course.id}`}
              className="block bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                  {course.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <span className="px-2 py-0.5 text-xs rounded bg-orange-500/20 text-orange-300 font-mono">
                      {course.code}
                    </span>
                    <span className={`px-2 py-0.5 text-xs rounded ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">{course.description}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>📚 {course.lessons} lessons</span>
                    <span>⏱️ {course.hours} hours</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Certification Roadmap */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Recommended Path</h2>
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">1</span>
              <div>
                <div className="font-bold">Cloud Practitioner</div>
                <div className="text-sm text-gray-400">Foundations</div>
              </div>
            </div>
            <div className="text-gray-600">→</div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">2</span>
              <div>
                <div className="font-bold">Cloud Developer</div>
                <div className="text-sm text-gray-400">or</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold">2</span>
              <div>
                <div className="font-bold">Solutions Architect</div>
                <div className="text-sm text-gray-400">Associate</div>
              </div>
            </div>
            <div className="text-gray-600">→</div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold">3</span>
              <div>
                <div className="font-bold">DevOps Engineer</div>
                <div className="text-sm text-gray-400">or Professional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
