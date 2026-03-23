import { useState } from 'react'
import { Nav, Hero } from './components'
import StyleGuide from './components/StyleGuide'
import './App.css'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import { Studies } from './components'

function App() {
  const [showStyleGuide, setShowStyleGuide] = useState(false)

  if (showStyleGuide) {
    return (
      <>
        <Nav />
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
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Studies />
      <button
        onClick={() => setShowStyleGuide(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          zIndex: 1000,
        }}
      >
        🎨 Style Guide
      </button>
    </>
  )
}

export default App