import './Work.css'
import { playClickSound } from '../utils/soundUtils'
import sfcImage from '../assets/sfc-sample.png'
import humbleBeginningsImage from '../assets/ourhumblebeginnings.png'
import agroSortImage from '../assets/AgroSort.png'

function Work({ setActiveSection }) {
  const handleBackClick = () => {
    playClickSound()
    setActiveSection('home')
  }
  const projects = [
    {
      id: 1,
      image: sfcImage,
      title: 'Success Comes From Failure: Product Management System for Seven Four Clothing',
      description: 'We developed this Web-Based Product Management System for our Final Project for Software Engineering. We also got to meet the owner of Seven Four Clothing and he was very impressed with our work and gave us free t-shirts! :D',
      technologies: ['React JS', 'Node.js', 'MySQL']
    },
    {
      id: 2,
      image: humbleBeginningsImage,
      title: 'Our Humble Beginnings App',
      description: 'I developed this Mobile Application out of passion for the cafe since i really loved the place. I usually hangout there with my friend who worked there and it is my comfort place for studying/coding!',
      technologies: ['Flutter', 'Supabase']
    },
    {
      id: 3,
      image: agroSortImage,
      title: 'Agro Sort',
      description: 'This a game that i developed for Data Structures and Algorithms in my Sophmore year. I really don\'t have any knowledge in making video games but this contributed so much for my experience as a developer.',
      technologies: ['Java']
    }
  ]

  return (
    <div className="work-card">
      <button 
        className="back-button" 
        onClick={handleBackClick}
        aria-label="Back to home"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      
      <div className="work-header">
        <h1 className="work-title">Work</h1>
        <p className="work-subtitle">Projects I've worked on</p>
      </div>
      
      <div className="work-content">
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`project-image ${project.id === 2 ? 'show-full-image' : ''}`}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="image-placeholder" style={{ display: 'none' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                  <span>Image: {project.image.split('/').pop()}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="tech-badges">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
