import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Page3() {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.classList.add('allow-scroll')
    return () => document.body.classList.remove('allow-scroll')
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', margin: 0 }}>shresh</h1>
          <h1 style={{ fontSize: '48px', margin: 0 }}>Will you be my valentine???</h1>
        </div>
        <button onClick={() => navigate('/success')} style={{ padding: '15px 40px', fontSize: '20px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>Yes</button>
      </div>
      <div style={{ height: '2000px' }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
        <button onClick={() => navigate('/4')} style={{ padding: '15px 40px', fontSize: '20px', background: '#fff', color: '#000', border: '2px solid #000', cursor: 'pointer' }}>No</button>
      </div>
    </div>
  )
}
