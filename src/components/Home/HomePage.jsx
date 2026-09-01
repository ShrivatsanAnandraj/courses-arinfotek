import { Link } from 'react-router-dom'
import { Code, Rocket, BookOpen, Cloud } from 'lucide-react'
import { languages } from '../Languages/languages'
import LanguageLogo from '../Languages/LanguageLogos'

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-120px)]">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-accent font-bold text-sm">LEARN BY DOING</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Master Programming</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Interactive tutorials, real-time code execution, and hands-on practice. Choose a language and start coding today!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <BookOpen size={18} />
              <span className="text-sm font-medium">Languages + Linux</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Code size={18} />
              <span className="text-sm font-medium">Live Code Editor</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Rocket size={18} />
              <span className="text-sm font-medium">Instant Execution</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2">Choose Your Language</h2>
            <p className="text-slate-500">Click on any language to start learning</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {languages.map((lang) => (
              <Link key={lang.id} to={`/tutorial/${lang.id}`} className="group bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/30 hover:-translate-y-1">
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <LanguageLogo lang={lang.id} size={48} />
                </div>
                <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1 text-center">{lang.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 text-center">{lang.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2">Cloud Computing Certifications</h2>
            <p className="text-slate-500">Master AWS from fundamentals to professional level</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/cloud/cloud-practitioner" className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-400 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center text-white text-2xl">☁️</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">Cloud Practitioner</h3>
                  <p className="text-xs text-slate-500">CLF-C02 | Beginner</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">Cloud computing fundamentals and AWS basics</p>
            </Link>
            <Link to="/cloud/cloud-developer" className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-400 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl">💻</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">Cloud Developer</h3>
                  <p className="text-xs text-slate-500">DVA-C02 | Intermediate</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">Building and deploying cloud-native applications</p>
            </Link>
            <Link to="/cloud/solutions-architect-associate" className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-400 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl">🏗️</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">Solutions Architect</h3>
                  <p className="text-xs text-slate-500">SAA-C03 | Intermediate</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">Designing cost-optimized, resilient architectures</p>
            </Link>
          </div>
          <div className="text-center mt-6">
            <Link to="/cloud" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition shadow-lg shadow-orange-500/25">
              <Cloud size={18} />
              View All Certifications
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2">Why CodeLearn?</h2>
            <p className="text-slate-500">Everything you need to master programming</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><BookOpen className="text-primary" size={24} /></div>
              <h3 className="font-bold text-slate-800 mb-2">Structured Tutorials</h3>
              <p className="text-sm text-slate-500">Step-by-step lessons from basics to advanced concepts with real examples.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4"><Code className="text-accent" size={24} /></div>
              <h3 className="font-bold text-slate-800 mb-2">Live Code Editor</h3>
              <p className="text-sm text-slate-500">Write and run code directly in your browser with our VS Code-like editor.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4"><Rocket className="text-green-500" size={24} /></div>
              <h3 className="font-bold text-slate-800 mb-2">Instant Execution</h3>
              <p className="text-sm text-slate-500">See your code run instantly with real-time output and error feedback.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
