import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page10() {
  const [progress, setProgress] = useState(0)
  const [isHolding, setIsHolding] = useState(false)
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isHolding) {
      timeoutRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(intervalRef.current)
              navigate('/final')
              return 100
            }
            return prev + 2
          })
        }, 20)
      }, 500)
    } else {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
      setProgress(0)
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHolding])

  const handleStart = () => setIsHolding(true)
  const handleEnd = () => setIsHolding(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>shresh</h1>
        <h1 style={{ fontSize: '48px', margin: 0 }}>Will you be my valentine??????????</h1>
      </div>
      <button onClick={() => navigate('/success')} style={{ padding: '15px 40px', fontSize: '20px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>Yes</button>
      <button 
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        style={{ 
          padding: '15px 40px', 
          fontSize: '20px', 
          background: '#fff', 
          color: '#000', 
          border: '2px solid #000', 
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <span style={{ position: 'relative', zIndex: 2 }}>No</span>
        <div style={{ 
          position: 'absolute', 
          left: 0, 
          top: 0, 
          height: '100%', 
          width: `${progress}%`, 
          background: '#000', 
          transition: 'width 0.02s linear',
          zIndex: 1
        }} />
      </button>
    </div>
  )
}
