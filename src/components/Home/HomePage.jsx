import { Link } from 'react-router-dom'
import { Code, Rocket, BookOpen, Cloud, Server, Lock } from 'lucide-react'
import { languages } from '../Languages/languages'
import LanguageLogo from '../Languages/LanguageLogos'
import { useAuth } from '../../contexts/AuthContext'

export default function HomePage() {
  const { user, hasAccess } = useAuth()
  const activated = Array.isArray(user?.activated) ? user.activated : []

  const gridLangs = languages.filter(l => l.id !== 'linux' && activated.includes(l.id))
  const extras = [
    { id: 'linux', name: 'Linux', desc: 'Ubuntu & RHEL server administration', to: '/tutorial/linux', icon: Server, gradient: 'from-orange-500 to-amber-600' },
    { id: 'cloud', name: 'Cloud Computing', desc: 'AWS cloud practitioner & certifications', to: '/cloud', icon: Cloud, gradient: 'from-primary to-primary-dark' }
  ].filter(e => activated.includes(e.id))

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
              <span className="text-sm font-medium">Languages + Linux & Cloud</span>
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

      {activated.length === 0 ? (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto text-center bg-white rounded-2xl shadow-md p-12">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
              <Lock className="text-primary" size={28} />
            </div>
            <h2 className="text-xl font-black text-slate-800 mb-2">No courses activated yet</h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Your admin has not assigned any courses to your account yet. Please contact your administrator to activate your courses.
            </p>
          </div>
        </section>
      ) : (
        <>
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2">Choose Your Language</h2>
                <p className="text-slate-500">Click on any language to start learning</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {gridLangs.map((lang) => (
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

          {extras.length > 0 && (
            <section className="py-12 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2">Cloud, OS and more</h2>
                  <p className="text-slate-500">Explore operating systems and cloud computing tracks</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {extras.map(extra => (
                    <Link
                      key={extra.id}
                      to={extra.to}
                      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/30 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${extra.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                          <extra.icon size={26} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-lg">{extra.name}</h3>
                          <p className="text-sm text-slate-500">{extra.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

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
