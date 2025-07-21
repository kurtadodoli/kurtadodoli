import './Hero.css'
import Navigation from './Navigation'

function Hero({ activeSection, setActiveSection }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          hi! <span className="highlight">i'm kurt</span>
        </h1>
        <p className="hero-subtitle">computer science, web design, and web development</p>
        <div className="hero-navigation">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
      </div>
    </div>
  )
}

export default Hero
