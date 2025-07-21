import './About.css'
import kurtImage from '../assets/kurt.jpg'
import { playClickSound } from '../utils/soundUtils'

function About({ setActiveSection }) {
  const handleBackClick = () => {
    playClickSound()
    setActiveSection('home')
  }

  return (
    <div className="about-card">
      <button 
        className="back-button" 
        onClick={handleBackClick}
        aria-label="Back to home"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <div className="about-header">
        <div className="profile-section">
          <img src={kurtImage} alt="Kurt Adodoli" className="profile-image" />
          <h1 className="about-name">Kurt Adodoli</h1>
        </div>
      </div>
      
      <div className="about-content">
        <div className="about-intro">
          <p className="about-greeting">hi i'm kurt, a web developer and designer</p>
        </div>
        
        <div className="about-skills">
          <ul className="skills-list">
            <li>i create web designs</li>
            <li>i create website wireframes</li>
            <li>i do frontend web development</li>
          </ul>
        </div>
        
        <div className="about-contact">
          <p>interested in working with me? send me an email at <a href="mailto:kurtadodoli@gmail.com" className="email-link">kurtadodoli@gmail.com</a>! :D</p>
        </div>
        
        <div className="about-education">
          <h3 className="education-title">EDUCATION</h3>
          <p className="education-degree">Bachelor of Science in Computer Science</p>
        </div>
        
        <div className="about-interests">
          <h3 className="interests-title">OTHER INTERESTS</h3>
          <ul className="interests-list">
            <li>playing guitar</li>
            <li>cycling</li>
            <li>mobile application development</li>
            <li>cosmic/galaxy themes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
