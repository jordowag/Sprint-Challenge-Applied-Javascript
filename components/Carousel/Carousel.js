/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function createCarousel(){
  let sources = [
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg"
  ];
  let carousel = ce("div")
  carousel.classList.add("carousel");
  let left = ce("div");
  left.classList.add("left-button");
  let right = ce("div");
  right.classList.add("right-button");
  let htmlImgs = sources.map((source) => {
    let img = ce("img");
    img.src = source;
    return img
  });
  // Structure
  carousel.append(left);
  htmlImgs.forEach((img) => {
    carousel.append(img);
  });
  // Content
  carousel.append(right);
  left.textContent = "<";
  right.textContent = ">";
  return carousel
}

document.querySelector(".carousel-container").append(createCarousel());

let currentIndex = 0;
let images = document.querySelectorAll(".carousel-container img");
images[currentIndex].style.display = "block";
images[currentIndex].style.opacity = 1;
document.querySelector(".left-button").addEventListener("click", (event) => {
  TweenLite.to(images[currentIndex], .5, {opacity:0, display:"none"});
  if (currentIndex == 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  setTimeout(() => {
    TweenLite.to(images[currentIndex], .5, {opacity: 1, display:"block"});
  }, 500);
});

document.querySelector(".right-button").addEventListener("click", (event) => {
  TweenLite.to(images[currentIndex], .5, {opacity:0, display:"none"});
  if (currentIndex == images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setTimeout(() => {
    TweenLite.to(images[currentIndex], .5, {opacity: 1, display:"block"});
  }, 500);
});
