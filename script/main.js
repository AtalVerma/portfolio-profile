
// window.addEventListener('DOMContentLoaded', () => {
//   const welcome = document.getElementById('welcomescreen');
//   const main = document.getElementById('mainPage');

//   // Show body only after DOM & critical CSS is ready
//   document.body.classList.add('show-content');

//   // Show welcome screen for 2 seconds
//   setTimeout(() => {
//     welcome.classList.add('fade-out'); // start fading out

//     setTimeout(() => {
//       welcome.style.display = 'none'; // hide welcome screen
//       main.style.display = 'block';   // show main content
//     }, 1000); // must match CSS fade duration (1s)
//   }, 1200); // how long welcome screen stays visible
// });

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
