// Get the audio element and the play/pause button
const audio = document.getElementById('audio');
const playPauseBTN = document.getElementById('playPauseBTN');

// Define the playPause function
function playPause() {
  // Check if the audio is playing
  if (audio.paused) {
    // Play the audio
    audio.play();
    // Update the button icon to pause
    playPauseBTN.innerHTML = '<img src="assets/img/pausebtn.png">';
  } else {
    // Pause the audio
    audio.pause();
    // Update the button icon to play
    playPauseBTN.innerHTML = '<img src="assets/img/playbtn.png">';
  }
}
