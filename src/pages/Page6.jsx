import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page6() {
  const [clicked, setClicked] = useState({})
  const navigate = useNavigate()

  const text = "Will you be my valentine??????"
  const letters = text.split('')

  useEffect(() => {
    const nIndices = letters.map((l, i) => l.toLowerCase() === 'n' ? i : -1).filter(i => i !== -1)
    const oIndices = letters.map((l, i) => l.toLowerCase() === 'o' ? i : -1).filter(i => i !== -1)
    const yIndices = letters.map((l, i) => l.toLowerCase() === 'y' ? i : -1).filter(i => i !== -1)
    const aIndices = letters.map((l, i) => l.toLowerCase() === 'a' ? i : -1).filter(i => i !== -1)
    
    const hasN = nIndices.some(i => clicked[i])
    const hasO = oIndices.some(i => clicked[i])
    const hasY = yIndices.some(i => clicked[i])
    const hasA = aIndices.some(i => clicked[i])
    
    if (hasN && hasO) {
      setTimeout(() => navigate('/7'), 500)
    } else if (hasY && hasA) {
      setTimeout(() => navigate('/success'), 500)
    }
  }, [clicked])

  const handleClick = (index, letter) => {
    const newClicked = { ...clicked }
    newClicked[index] = !newClicked[index]
    setClicked(newClicked)
  }

  const getColor = (letter, index) => {
    if (!clicked[index]) return 'inherit'
    const lower = letter.toLowerCase()
    if (lower === 'n' || lower === 'o') return 'red'
    if (lower === 'y' || lower === 'a') return 'green'
    return 'yellow'
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>shresh</h1>
        <h1 style={{ fontSize: '48px', margin: 0 }}>
          {letters.map((letter, i) => (
            <span
              key={i}
              onClick={() => handleClick(i, letter)}
              style={{
                cursor: 'pointer',
                color: getColor(letter, i)
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <button onClick={() => navigate('/success')} style={{ padding: '15px 40px', fontSize: '20px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>Yes</button>
    </div>
  )
}
