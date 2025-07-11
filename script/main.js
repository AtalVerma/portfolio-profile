window.addEventListener('DOMContentLoaded', () => {
  const welcomeScreen = document.getElementById('welcomescreen');
  const mainPage = document.getElementById('mainPage');
  const fadeDuration = 1000; // fade out time in ms
  const totalPopDuration = 1900; // approx time for all words to pop (adjust if you change delays)

  // Show main content hidden initially (if needed)
  mainPage.style.display = 'none';
  document.body.classList.add('show-content');

  // After popping animation finishes, fade out welcome screen
  setTimeout(() => {
    welcomeScreen.classList.add('fade-out');

    setTimeout(() => {
      welcomeScreen.style.display = 'none';
      mainPage.style.display = 'block';
    }, fadeDuration);
  }, totalPopDuration + 500); // extra delay so words stay visible a bit
});
