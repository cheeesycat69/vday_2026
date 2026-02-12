import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page8() {
  const [clicks, setClicks] = useState(0)
  const [toasts, setToasts] = useState([])
  const navigate = useNavigate()

  const handleNoClick = () => {
    const newClicks = clicks + 1
    setClicks(newClicks)
    
    if (newClicks >= 3) {
      const remaining = 7 - newClicks
      if (remaining > 0) {
        setToasts([`${remaining} more time${remaining > 1 ? 's' : ''}`, ...toasts])
      } else if (remaining === 0) {
        navigate('/9')
      }
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px', position: 'relative' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>shresh</h1>
        <h1 style={{ fontSize: '48px', margin: 0 }}>Will you be my valentine????????</h1>
      </div>
      <button onClick={() => navigate('/success')} style={{ padding: '15px 40px', fontSize: '20px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>Yes</button>
      <button 
        onClick={handleNoClick}
        style={{ 
          padding: '15px 40px', 
          fontSize: '20px', 
          background: '#fff', 
          color: '#000', 
          border: '2px solid #000', 
          cursor: 'pointer' 
        }}
      >
        No
      </button>
      <div style={{ position: 'fixed', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 1000 }}>
        {toasts.map((toast, i) => (
          <div 
            key={i}
            style={{ 
              padding: '15px 20px', 
              background: '#000', 
              color: '#fff', 
              borderRadius: '4px',
              fontFamily: 'Courier New, monospace',
              fontSize: '16px'
            }}
          >
            {toast}
          </div>
        ))}
      </div>
    </div>
  )
}
