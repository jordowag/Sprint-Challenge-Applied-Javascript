// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    let header = ce("div");
    header.classList.add("header");
    let date = ce("span");
    date.classList.add("date");
    let h1 = ce("h1");
    let temp = ce("span");
    temp.classList.add("temp");
    // Structure
    header.append(date,h1,temp);
    // Text
    date.textContent ="MARCH 28, 2019";
    h1.textContent = "Lambda Times";
    temp.textContent = "98°";
    return header
}
let header = Header();
let headerCont = document.querySelector(".header-container");
headerCont.append(header);

// Replaces document.createElement
function ce(element) {
    return document.createElement(element);
}