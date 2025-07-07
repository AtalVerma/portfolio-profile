
window.addEventListener('DOMContentLoaded', () => {
  const welcome = document.getElementById('welcomescreen');
  const main = document.getElementById('mainPage');

  // Show body only after DOM & critical CSS is ready
  document.body.classList.add('show-content');

  // Show welcome screen for 2 seconds
  setTimeout(() => {
    welcome.classList.add('fade-out'); // start fading out

    setTimeout(() => {
      welcome.style.display = 'none'; // hide welcome screen
      main.style.display = 'block';   // show main content
    }, 1000); // must match CSS fade duration (1s)
  }, 1200); // how long welcome screen stays visible
});

