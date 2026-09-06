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
    <span className="whitespace-pre-wrap">
      {prompt ? <span className="text-green-400">{prompt}</span> : null}
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        size={Math.max(4, value.length + 1)}
        className="bg-transparent text-green-400 font-mono text-xs outline-none border-0 p-0 m-0 caret-green-400"
        aria-label="program input"
      />
    </span>
  )
}