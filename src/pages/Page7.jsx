import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page7() {
  const [showNo, setShowNo] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const randomDelay = () => Math.random() * 3000 + 2000
    
    const cycle = () => {
      setTimeout(() => {
        setShowNo(true)
        setTimeout(() => {
          setShowNo(false)
          cycle()
        }, 500)
      }, randomDelay())
    }
    
    cycle()
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>shresh</h1>
        <h1 style={{ fontSize: '48px', margin: 0 }}>Will you be my valentine???????</h1>
      </div>
      <button onClick={() => navigate('/success')} style={{ padding: '15px 40px', fontSize: '20px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>Yes</button>
      {showNo && (
        <button 
          onClick={() => navigate('/8')}
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
      )}
    </div>
  )
}
