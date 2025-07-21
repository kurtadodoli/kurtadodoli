import './Contact.css'
import { playClickSound } from '../utils/soundUtils'

function Contact({ setActiveSection }) {
  const handleBackClick = () => {
    playClickSound()
    setActiveSection('home')
  }

  const handleEmailClick = () => {
    playClickSound()
    window.open('mailto:kurtadodoli@gmail.com', '_blank')
  }

  return (
    <div className="contact-card">
      <button 
        className="back-button" 
        onClick={handleBackClick}
        aria-label="Back to home"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      
      <div className="contact-header">
        <div className="mail-icon">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Astronaut body - main suit */}
            <ellipse cx="50" cy="65" rx="18" ry="20" fill="white"/>
            
            {/* Helmet - large clear bubble */}
            <circle cx="50" cy="35" r="22" fill="rgba(70,80,120,0.8)"/>
            <circle cx="50" cy="35" r="20" fill="rgba(90,100,140,0.9)"/>
            
            {/* Helmet highlight/reflection */}
            <ellipse cx="45" cy="28" rx="6" ry="8" fill="rgba(255,255,255,0.3)"/>
            
            {/* Face inside helmet - simple dots and smile */}
            <circle cx="45" cy="32" r="1.5" fill="white"/>
            <circle cx="55" cy="32" r="1.5" fill="white"/>
            <path d="M47 38 Q50 40 53 38" stroke="white" strokeWidth="1.5" fill="none"/>
            
            {/* Body suit chest panel */}
            <rect x="44" y="55" width="12" height="10" fill="#667eea" rx="2"/>
            <circle cx="47" cy="58" r="1.5" fill="#00bcd4"/>
            <circle cx="53" cy="58" r="1.5" fill="#ff4444"/>
            <rect x="46" y="62" width="8" height="1" fill="rgba(255,255,255,0.6)"/>
            <rect x="46" y="64" width="8" height="1" fill="rgba(255,255,255,0.6)"/>
            
            {/* Arms - simple white shapes */}
            <ellipse cx="30" cy="55" rx="5" ry="10" fill="white"/>
            <ellipse cx="70" cy="55" rx="5" ry="10" fill="white"/>
            
            {/* Gloves - rounded */}
            <circle cx="30" cy="66" r="4" fill="white"/>
            <circle cx="70" cy="66" r="4" fill="white"/>
            
            {/* Legs */}
            <ellipse cx="42" cy="80" rx="4" ry="8" fill="white"/>
            <ellipse cx="58" cy="80" rx="4" ry="8" fill="white"/>
            
            {/* Boots */}
            <ellipse cx="42" cy="92" rx="4" ry="3" fill="#333"/>
            <ellipse cx="58" cy="92" rx="4" ry="3" fill="#333"/>
            
            {/* Backpack/life support - cleaner design */}
            <rect x="62" y="48" width="6" height="12" fill="#667eea" rx="2"/>
            <circle cx="65" cy="45" r="1.5" fill="#00bcd4"/>
            
            {/* Mail envelope floating nearby - clean design */}
            <g transform="translate(15,18)">
              <rect x="0" y="0" width="14" height="10" fill="white" rx="1"/>
              <path d="M0 2 L7 6 L14 2" stroke="#667eea" strokeWidth="1.5" fill="none"/>
              <circle cx="11" cy="2.5" r="1" fill="#ff4444"/>
              
              {/* Floating animation */}
              <animateTransform attributeName="transform" type="translate" values="15,18; 17,16; 15,18" dur="2.5s" repeatCount="indefinite"/>
            </g>
            
            {/* Simple motion lines */}
            <path d="M25 90 Q30 88 35 90" stroke="rgba(102,126,234,0.3)" strokeWidth="1.5" fill="none"/>
            <path d="M65 90 Q70 88 75 90" stroke="rgba(102,126,234,0.3)" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <h1 className="contact-title">yayy mail!</h1>
      </div>
      
      <div className="contact-content">
        <div className="contact-message">
          <p className="contact-description">
            the easiest way to contact me is through email! I don't really check my social media messages, so please direct questions to my email instead
          </p>
        </div>
        
        <div className="email-section">
          <p className="email-label">email me at:</p>
          <a href="mailto:kurtadodoli@gmail.com" className="email-address">
            kurtadodoli@gmail.com
          </a>
        </div>
        
        <div className="email-button-container">
          <button className="email-button" onClick={handleEmailClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            send me an email
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
