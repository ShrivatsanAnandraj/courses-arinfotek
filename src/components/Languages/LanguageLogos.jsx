export default function LanguageLogo({ lang, size = 40 }) {
  const logos = {
    python: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#3776AB" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="56" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">Py</text>
        <circle cx="101" cy="27" r="8" fill="#FFD43B" />
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#F7DF1E" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#000000" fontSize="58" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">JS</text>
      </svg>
    ),
    html: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#E34F26" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="42" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">&lt;/&gt;</text>
      </svg>
    ),
    css: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#1572B6" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="44" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">{`{ }`}</text>
      </svg>
    ),
    java: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#007396" />
        <text x="64" y="68" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="72" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">J</text>
        <circle cx="88" cy="32" r="8" fill="#E76F00" />
      </svg>
    ),
    kotlin: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#7F52FF" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="72" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">K</text>
      </svg>
    ),
    c: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#A8B9CC" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#22333B" fontSize="72" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">C</text>
      </svg>
    ),
    cpp: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#00599C" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="46" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">C++</text>
      </svg>
    ),
    csharp: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#239120" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="56" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">C#</text>
      </svg>
    ),
    ruby: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#CC342D" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="56" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">Rb</text>
      </svg>
    ),
    go: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#00ADD8" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="58" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">Go</text>
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#3178C6" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="56" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">TS</text>
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#336791" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="56" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">Pg</text>
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#339933" />
        <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="72" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">N</text>
      </svg>
    ),
    react: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#61DAFB" />
        <g fill="none" stroke="#20232A" strokeWidth="9" transform="translate(64 64)">
          <ellipse rx="44" ry="17" />
          <ellipse rx="44" ry="17" transform="rotate(60)" />
          <ellipse rx="44" ry="17" transform="rotate(120)" />
        </g>
        <circle cx="64" cy="64" r="11" fill="#20232A" />
      </svg>
    ),
    linux: (
      <svg viewBox="0 0 128 128" width={size} height={size}>
        <rect width="128" height="128" rx="28" fill="#111827" />
        <ellipse cx="64" cy="82" rx="27" ry="31" fill="#F8FAFC" />
        <circle cx="64" cy="45" r="23" fill="#F8FAFC" />
        <circle cx="56" cy="41" r="5" fill="#111827" />
        <circle cx="72" cy="41" r="5" fill="#111827" />
        <polygon points="55,52 73,52 64,64" fill="#FCC624" />
        <ellipse cx="49" cy="112" rx="11" ry="6" fill="#FCC624" />
        <ellipse cx="79" cy="112" rx="11" ry="6" fill="#FCC624" />
      </svg>
    )
  }

  return logos[lang] || (
    <svg viewBox="0 0 128 128" width={size} height={size}>
      <rect width="128" height="128" rx="28" fill="#64748b" />
      <text x="64" y="66" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="56" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif">
        {lang?.charAt(0)?.toUpperCase() || '?'}
      </text>
    </svg>
  )
}
