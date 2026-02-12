export default function Success() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#fff' }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        background: '#ffb3d9',
        animation: 'fillDown 2s ease-out forwards',
        transformOrigin: 'top'
      }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', zIndex: 10 }}>
        <h1 style={{ fontSize: '72px', color: '#000' }}>Yay!</h1>
      </div>
      <style>{`
        @keyframes fillDown {
          from { clip-path: inset(0 0 100% 0); }
          to { clip-path: inset(0 0 0 0); }
        }
      `}</style>
    </div>
  )
}
