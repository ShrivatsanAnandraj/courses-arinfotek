export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/arinfotek_logo.png" alt="AR INFOTEK" className="h-8 w-auto object-contain brightness-0 invert mb-3" />
            <p className="text-sm text-slate-400 leading-relaxed">Practical, mentor-led online IT training to accelerate your career.</p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-3">Programs</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="https://arinfotek.co.in/#courses" className="hover:text-white transition">AWS Architect</a></li>
              <li><a href="https://arinfotek.co.in/#courses" className="hover:text-white transition">Data Science</a></li>
              <li><a href="https://arinfotek.co.in/#courses" className="hover:text-white transition">DevOps</a></li>
              <li><a href="https://arinfotek.co.in/#courses" className="hover:text-white transition">Python</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="https://arinfotek.co.in/#why" className="hover:text-white transition">Why Us</a></li>
              <li><a href="https://arinfotek.co.in/#internship" className="hover:text-white transition">Internship</a></li>
              <li><a href="https://arinfotek.co.in/#projects" className="hover:text-white transition">Innovation Labs</a></li>
              <li><a href="https://assessment.arinfotek.co.in" className="hover:text-white transition">Assessment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>admissions@arinfotek.co.in</li>
              <li>+91-9487107253</li>
              <li>WhatsApp: +91-9487107253</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">&copy; 2025 AR INFOTEK &ndash; All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
