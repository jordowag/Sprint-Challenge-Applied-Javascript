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
    .catch(catchErr);

function createArticles(response) {
    let data = response.data;
    let articles = [];
    for (property in data.articles) {
        data.articles[property].forEach((article) => {
            let card = ce("div");
            card.classList.add("card");
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
    let cards = document.querySelector(".cards-container");
    articles.forEach((article) => {
        cards.append(article);
    });
}