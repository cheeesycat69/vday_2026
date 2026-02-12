import { useNavigate } from 'react-router-dom'

export default function Page1() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>shresh</h1>
        <h1 style={{ fontSize: '48px', margin: 0 }}>Will you be my valentine?</h1>
      </div>
      <button onClick={() => navigate('/success')} style={{ padding: '15px 40px', fontSize: '20px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>Yes</button>
      <button onClick={() => navigate('/2')} style={{ padding: '15px 40px', fontSize: '20px', background: '#fff', color: '#000', border: '2px solid #000', cursor: 'pointer' }}>No</button>
    </div>
  )
}
