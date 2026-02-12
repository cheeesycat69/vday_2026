import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page4() {
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setPos({ x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 })
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px', position: 'relative' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>shresh</h1>
        <h1 style={{ fontSize: '48px', margin: 0 }}>Will you be my valentine????</h1>
      </div>
      <button onClick={() => navigate('/success')} style={{ padding: '15px 40px', fontSize: '20px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>Yes</button>
      <button 
        onClick={() => navigate('/5')}
        style={{ 
          padding: '15px 40px', 
          fontSize: '20px', 
          background: '#fff', 
          color: '#000', 
          border: '2px solid #000', 
          cursor: 'pointer',
          position: 'absolute',
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        No
      </button>
    </div>
  )
}
