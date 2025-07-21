import './Navigation.css'
import { playClickSound } from '../utils/soundUtils'

function Navigation({ activeSection, setActiveSection }) {
  const handleNavClick = (sectionId) => {
    playClickSound()
    setActiveSection(sectionId)
  }
  const navItems = [
    {
      id: 'about',
      label: 'about',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="12" cy="12" r="6" stroke="white" fill="none"/>
          <ellipse cx="12" cy="12" rx="9" ry="2" stroke="white" fill="none"/>
          <ellipse cx="12" cy="12" rx="9" ry="2" stroke="white" fill="none" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="9" ry="2" stroke="white" fill="none" transform="rotate(-60 12 12)"/>
        </svg>
      )
    },
    {
      id: 'links',
      label: 'links',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <g transform="translate(12,12)">
            <circle cx="0" cy="0" r="2" fill="white"/>
            <path d="M-8,0 L-2,-1.5 L0,-8 L2,-1.5 L8,0 L2,1.5 L0,8 L-2,1.5 Z" 
                  fill="white" opacity="0.8" stroke="white" strokeWidth="0.5"/>
            <rect x="-12" y="-1" width="24" height="2" fill="white" opacity="0.6"/>
            <rect x="-1" y="-12" width="2" height="24" fill="white" opacity="0.6"/>
            <circle cx="0" cy="0" r="8" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3"/>
          </g>
        </svg>
      )
    },
    {
      id: 'work',
      label: 'work',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="12" cy="12" r="7" fill="white" opacity="0.2" stroke="white"/>
          <ellipse cx="12" cy="12" rx="11" ry="3" stroke="white" fill="none"/>
          <ellipse cx="12" cy="12" rx="12" ry="3.5" stroke="white" fill="none" opacity="0.6"/>
          <circle cx="12" cy="12" r="6" fill="white" opacity="0.4"/>
          <circle cx="12" cy="10" r="0.8" fill="white" opacity="0.8"/>
          <circle cx="14" cy="13" r="0.5" fill="white" opacity="0.6"/>
          <circle cx="10" cy="14" r="0.3" fill="white" opacity="0.7"/>
        </svg>
      )
    },
    {
      id: 'contact',
      label: 'contact',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="6" cy="6" r="1" fill="white"/>
          <circle cx="12" cy="4" r="1" fill="white"/>
          <circle cx="18" cy="7" r="1" fill="white"/>
          <circle cx="9" cy="12" r="1" fill="white"/>
          <circle cx="15" cy="12" r="1" fill="white"/>
          <circle cx="6" cy="18" r="1" fill="white"/>
          <circle cx="18" cy="18" r="1" fill="white"/>
          <path d="M6 6l6 6M12 4l3 8M18 7l-3 5M9 12l6 0M15 12l3 6M6 18l9-6" stroke="white" strokeWidth="0.5" opacity="0.6"/>
        </svg>
      )
    }
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
            aria-label={item.label}
          >
            <div className="nav-icon">
              {item.icon}
            </div>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
