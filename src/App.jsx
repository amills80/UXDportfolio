import { useState } from 'react'
import StyleGuide from './components/StyleGuide'
import './App.css'

function App() {
  const [showStyleGuide, setShowStyleGuide] = useState(true)

  if (showStyleGuide) {
    return (
      <>
        <StyleGuide />
        <button 
          onClick={() => setShowStyleGuide(false)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            zIndex: 1000,
          }}
        >
          ✕ Close Style Guide
        </button>
      </>
    )
  }

  return (
    <main>
      <div className="container">
        <h1>Alan Mills</h1>
        <p className="text-body-lg">Senior Product Designer & UX Strategist</p>
        <p>Portfolio coming soon...</p>
        <button onClick={() => setShowStyleGuide(true)}>
          View Style Guide
        </button>
      </div>
    </main>
  )
}

export default App