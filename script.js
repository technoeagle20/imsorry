let zIndexCounter = 100;

function flipPage(page) {
  if (!page.classList.contains('flipped')) {
    page.classList.add('flipped');
    page.style.zIndex = zIndexCounter--;
  }
}
