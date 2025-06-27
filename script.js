let musicStarted = false;

function flipPage(element) {
  element.classList.toggle('flipped');

  // Start music on first user click
  if (!musicStarted) {
    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.play().then(() => {
        musicStarted = true;
      }).catch(err => {
        console.warn("Music blocked by browser:", err.message);
      });
    }
  }
}
