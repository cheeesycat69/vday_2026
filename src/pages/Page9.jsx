import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page9() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const navigate = useNavigate()

  const handleStart = (e) => {
    e.preventDefault()
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY
    setIsDragging(true)
    setStartPos({ x: clientX - pos.x, y: clientY - pos.y })
  }

  const handleMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY
    setPos({ x: clientX - startPos.x, y: clientY - startPos.y })
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  const handleYesClick = (e) => {
    if (Math.abs(pos.x) < 5 && Math.abs(pos.y) < 5) {
      navigate('/success')
    }
  }

  return (
    <div 
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px', position: 'relative', overflow: 'hidden' }}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>shresh</h1>
        <h1 style={{ fontSize: '48px', margin: 0 }}>Will you be my valentine?????????</h1>
      </div>
      <div style={{ position: 'relative', width: '200px', height: '60px' }}>
        <button 
          onClick={() => navigate('/final')}
          style={{ 
            padding: '15px 40px', 
            fontSize: '20px', 
            background: '#fff', 
            color: '#000', 
            border: '2px solid #000', 
            cursor: 'pointer',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1
          }}
        >
          No
        </button>
        <button 
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          onClick={handleYesClick}
          style={{ 
            padding: '15px 40px', 
            fontSize: '20px', 
            background: '#000', 
            color: '#fff', 
            border: 'none', 
            cursor: isDragging ? 'grabbing' : 'grab',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
            touchAction: 'none',
            userSelect: 'none',
            zIndex: 2
          }}
        >
          Yes
        </button>
      </div>
    </div>
  )
}
