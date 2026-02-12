import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page2() {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (input.toLowerCase() === 'yes') {
      navigate('/success')
    } else if (input.toLowerCase() === 'no') {
      navigate('/3')
    } else {
      setError('Type "yes" or "no"')
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '40px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>shresh</h1>
        <h1 style={{ fontSize: '48px', margin: 0 }}>Will you be my valentine??</h1>
      </div>
      <button onClick={() => navigate('/success')} style={{ padding: '15px 40px', fontSize: '20px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>Yes</button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <input 
          value={input}
          onChange={(e) => { setInput(e.target.value); setError('') }}
          placeholder="Type here..."
          style={{ padding: '15px', fontSize: '20px', border: '2px solid #000', fontFamily: 'Courier New, monospace', width: '300px' }}
        />
        <button onClick={handleSubmit} style={{ padding: '15px 40px', fontSize: '20px', background: '#fff', color: '#000', border: '2px solid #000', cursor: 'pointer' }}>Submit</button>
        {error && <p style={{ color: '#000' }}>{error}</p>}
      </div>
    </div>
  )
}
