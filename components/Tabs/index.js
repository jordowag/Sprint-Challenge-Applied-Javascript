// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
'use strict';
let url = "https://lambda-times-backend.herokuapp.com/topics";
axios.get(url)
    .then(createTabs)
    .then(appendTabs)
    .catch(catchErr);

function createTabs(response){
    let data = response.data;
    return data.topics.map((topic) => {
        let tab = ce("div");
        tab.classList.add("tab");
        tab.textContent = topic;
        return tab
    })
}

function appendTabs(tabs){
    let topics = document.querySelector(".topics");
    tabs.forEach((tab) => {
        topics.append(tab);
    });
}

function catchErr(err){
    console.log(err);
}

function ce(element) {
    return document.createElement(element);
}