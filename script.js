let musicStarted = false;

function flipPage(element) {
  element.classList.toggle('flipped');

  // Play music on first interaction
  if (!musicStarted) {
    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.play()
        .then(() => {
          musicStarted = true;
          console.log("Music playing...");
        })
        .catch(err => {
          console.warn("Music could not play:", err.message);
        });
    }
  }
}
