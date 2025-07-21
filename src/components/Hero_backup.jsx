import './Hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="cosmic-background">
        <div className="star-large"></div>
        <div className="star-large"></div>
        <div className="star-large"></div>
        <div className="star-large"></div>
        <div className="star-medium"></div>
        <div className="star-medium"></div>
        <div className="star-small"></div>
        <div className="star-small"></div>
        <div className="star-small"></div>
        <div className="star-small"></div>
      </div>
      <div className="cosmic-objects">
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="comet"></div>
      </div>
      <div className="royal-character">
        <div className="crown">👑</div>
        <div className="character-body">
          <div className="fleur-de-lis">⚜️</div>
        </div>
        <div className="cosmic-trail"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          hi! <span className="highlight">i'm kurt</span>
        </h1>
        <p className="hero-subtitle">cosmic royalty, digital creator, and developer</p>
      </div>
    </div>
  )
}

export default Hero
