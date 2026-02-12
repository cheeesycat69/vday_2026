import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Final() {
  const navigate = useNavigate()
  const [flowers, setFlowers] = useState(1)

  useEffect(() => {
    const count = parseInt(localStorage.getItem('flowerCount') || '1')
    setFlowers(count)
  }, [])

  const handleChangeMyMind = () => {
    const newCount = flowers + 1
    localStorage.setItem('flowerCount', newCount.toString())
    navigate('/')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px', padding: '20px' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '48px', margin: '0 0 20px 0' }}>
          I'll get you {flowers === 1 ? 'a flower' : `${flowers} flowers`}
        </h1>
        <div style={{ fontSize: '64px', margin: 0, display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {Array(flowers).fill(0).map((_, i) => (
            <svg key={i} width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2">
              <circle cx="50" cy="50" r="8" fill="black"/>
              <circle cx="50" cy="50" r="15"/>
              <circle cx="50" cy="50" r="22"/>
              <circle cx="50" cy="25" r="8"/>
              <circle cx="50" cy="75" r="8"/>
              <circle cx="25" cy="50" r="8"/>
              <circle cx="75" cy="50" r="8"/>
              <circle cx="35" cy="35" r="6"/>
              <circle cx="65" cy="35" r="6"/>
              <circle cx="35" cy="65" r="6"/>
              <circle cx="65" cy="65" r="6"/>
            </svg>
          ))}
        </div>
      </div>
      <button 
        onClick={handleChangeMyMind}
        style={{ 
          padding: '15px 40px', 
          fontSize: '20px', 
          background: '#000', 
          color: '#fff', 
          border: 'none', 
          cursor: 'pointer' 
        }}
      >
        Okay let me consider
      </button>
    </div>
  )
}
