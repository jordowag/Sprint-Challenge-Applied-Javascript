// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let articlesURL = "https://lambda-times-backend.herokuapp.com/articles";
axios.get(articlesURL)
    .then(createArticles)
    .then(appendArticles)
    .then(filter)
    .catch(catchErr);


function createArticles(response) {
    let data = response.data;
    let articles = [];
    for (property in data.articles) {
        data.articles[property].forEach((article) => {
            let card = ce("div");
            card.classList.add("card");
            if (property == "node"){
                card.type = "node.js";
            } else {
                card.type = property;
            }
            let headline = ce("div");
            headline.classList.add("headline");
            let author = ce("div");
            author.classList.add("author");
            let imgContainer = ce("div");
            imgContainer.classList.add("img-container");
            let img = ce("img");
            let span = ce("span");
            // Structure
            card.append(headline,author);
            author.append(imgContainer,span);
            imgContainer.append(img);
            // Content
            img.src = article.authorPhoto;
            headline.textContent = article.headline
            span.textContent = `By: ${article.authorName}`;
            articles.push(card);
        });
    };
    return articles
}

function appendArticles(articles) {
    let cardsCont = document.querySelector(".cards-container");
    articles.forEach((article) => {
        cardsCont.append(article);
    });
}

function filter(){
    let cards = document.querySelectorAll(".card");
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
        tab.addEventListener("click", (event) => {
            document.querySelector(".selected").classList.remove("selected");
            event.target.classList.add("selected");
            let topic = event.target.type;
            cards.forEach((card) => {
                if (topic == "all" || topic == card.type) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        })
    });
}