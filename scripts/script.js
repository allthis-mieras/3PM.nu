var header = document.querySelector(".site-header");
var lastScrollTop = 0;
var threshold = 20; // Adjust this threshold as needed

window.onscroll = function () {
  scrollHide();
};

function scrollHide() {
  var st = window.pageYOffset || document.documentElement.scrollTop;

  // Check if the scroll position has passed the threshold
  if (Math.abs(st - lastScrollTop) > threshold) {
    if (st > lastScrollTop) {
      // Scrolling down
      header.classList.add("hide");
    } else {
      // Scrolling up
      header.classList.remove("hide");
    }

    // Update the last scroll position
    lastScrollTop = st <= 0 ? 0 : st;
  }
}

// Specify the path to your Lottie JSON file
var animationPath = "3pm-ani.json";

// Initialize Lottie
var animation = lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg", // Choose the renderer (svg, canvas, html)
  loop: false, // Set to true if you want the animation to loop
  autoplay: true, // Set to true if you want the animation to start automatically
  path: animationPath,
});
