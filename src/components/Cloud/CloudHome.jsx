import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Clock, Cloud as CloudIcon, Award, Lock } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const courses = [
  {
    id: 'cloud-practitioner',
    title: 'Cloud Practitioner',
    code: 'CLF-C02',
    level: 'Beginner',
    lessons: 25,
    hours: 15,
    color: 'from-primary to-primary-dark',
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
  const { user, hasAccess } = useAuth()

  if (!user || !hasAccess('cloud')) {
    return (
      <div className="min-h-[calc(100vh-120px)] bg-slate-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-md p-10 max-w-md">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
            <Lock className="text-primary" size={28} />
          </div>
          <h2 className="text-xl font-black text-slate-800 mb-2">Cloud not activated</h2>
          <p className="text-slate-500 mb-4">
            Cloud Computing has not been activated for your account yet. Please contact your administrator.
          </p>
          <Link to="/home" className="inline-block px-5 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/home" className="inline-flex items-center gap-1 text-blue-200 hover:text-white mb-4 transition text-sm">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-white/15 flex items-center justify-center">
              <CloudIcon size={34} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black">AWS Cloud Certifications</h1>
              <p className="text-blue-200">5 certification paths · 155 lessons · 145+ hours</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-white">
            <div className="bg-white/15 rounded-lg px-4 py-2 text-center min-w-[90px]">
              <div className="text-2xl font-black">5</div>
              <div className="text-xs text-blue-200">Certifications</div>
            </div>
            <div className="bg-white/15 rounded-lg px-4 py-2 text-center min-w-[90px]">
              <div className="text-2xl font-black">155</div>
              <div className="text-xs text-blue-200">Lessons</div>
            </div>
            <div className="bg-white/15 rounded-lg px-4 py-2 text-center min-w-[90px]">
              <div className="text-2xl font-black">145+</div>
              <div className="text-xs text-blue-200">Hours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Paths */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
          <Award size={22} className="text-primary" /> Certification Paths
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/cloud/${course.id}`}
              className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group"
            >
              <div className={`h-1.5 bg-gradient-to-r ${course.color}`} />
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-xl flex-shrink-0`}>
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 group-hover:text-primary transition truncate">{course.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-1.5 py-0.5 text-[11px] rounded bg-primary/10 text-primary font-mono font-semibold">
                        {course.code}
                      </span>
                      <span className={`px-1.5 py-0.5 text-[11px] rounded font-semibold ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-4 min-h-[40px]">{course.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-3">
                  <span className="flex items-center gap-1"><BookOpen size={13} /> {course.lessons} lessons</span>
                  <span className="flex items-center gap-1"><Clock size={13} /> {course.hours} hours</span>
                  <span className="ml-auto text-primary font-bold group-hover:translate-x-0.5 transition">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Certification Roadmap */}
      <div className="max-w-5xl mx-auto px-4 py-8 pb-14">
        <h2 className="text-2xl font-black text-slate-800 mb-6 text-center">Recommended Path</h2>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</span>
              <div>
                <div className="font-bold text-slate-800">Cloud Practitioner</div>
                <div className="text-sm text-slate-500">Foundations</div>
              </div>
            </div>
            <div className="text-slate-300 hidden lg:block">→</div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</span>
              <div>
                <div className="font-bold text-slate-800">Cloud Developer</div>
                <div className="text-sm text-slate-500">or</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</span>
              <div>
                <div className="font-bold text-slate-800">Solutions Architect</div>
                <div className="text-sm text-slate-500">Associate</div>
              </div>
            </div>
            <div className="text-slate-300 hidden lg:block">→</div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</span>
              <div>
                <div className="font-bold text-slate-800">DevOps Engineer</div>
                <div className="text-sm text-slate-500">or Professional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
