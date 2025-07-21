import digitalClickSound from '../assets/sounds/digitalclick.mp3'

// Create audio instance
const clickAudio = new Audio(digitalClickSound)
clickAudio.volume = 0.3 // Set volume to 30% to avoid being too loud
clickAudio.preload = 'auto'

// Function to play click sound
export const playClickSound = () => {
  try {
    // Reset audio to beginning in case it's already playing
    clickAudio.currentTime = 0
    clickAudio.play().catch(error => {
      // Handle autoplay restrictions gracefully
      console.log('Audio play was prevented:', error)
    })
  } catch (error) {
    console.log('Error playing sound:', error)
  }
}

// Function to set volume (0.0 to 1.0)
export const setClickSoundVolume = (volume) => {
  clickAudio.volume = Math.max(0, Math.min(1, volume))
}
