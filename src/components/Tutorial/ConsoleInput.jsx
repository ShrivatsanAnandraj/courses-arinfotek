import { useState, useEffect, useRef } from 'react'

export default function ConsoleInput({ prompt, onSubmit }) {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const submit = () => {
    onSubmit(value)
    setValue('')
  }

  return (
    <div className="flex items-center gap-2 px-3 py-2 border-t border-slate-700 bg-slate-900">
      {prompt ? <span className="text-green-400 font-mono text-xs whitespace-pre-wrap shrink-0">{prompt}</span> : null}
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        className="flex-1 min-w-0 bg-slate-950 text-green-400 font-mono text-xs px-2 py-1 rounded border border-slate-700 outline-none focus:border-primary"
        placeholder="Type and press Enter"
      />
      <button
        onClick={submit}
        className="px-2 py-1 bg-primary text-white text-[10px] font-bold rounded hover:bg-primary-dark shrink-0"
      >
        Enter
      </button>
    </div>
  )
}