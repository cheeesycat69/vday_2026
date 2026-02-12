import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page5() {
  const [timer, setTimer] = useState(30)
  const navigate = useNavigate()

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>shresh</h1>
        <h1 style={{ fontSize: '48px', margin: 0 }}>Will you be my valentine?????</h1>
      </div>
      <button onClick={() => navigate('/success')} style={{ padding: '15px 40px', fontSize: '20px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>Yes</button>
      <button 
        disabled={timer > 0}
        onClick={() => navigate('/6')}
        style={{ 
          padding: '15px 40px', 
          fontSize: '20px', 
          background: timer > 0 ? '#ccc' : '#fff', 
          color: '#000', 
          border: '2px solid #000', 
          cursor: timer > 0 ? 'not-allowed' : 'pointer' 
        }}
      >
        No {timer > 0 && `(${timer}s)`}
      </button>
    </div>
  )
}
