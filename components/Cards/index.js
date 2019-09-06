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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        const articles = response.data.articles;
        const cards = document.querySelector('.cards-container');
        //Iterate Through Each Category
        articles.bootstrap.forEach(card => {
            cards.appendChild(createCard(card.headLine, card.image, card.author));
        })

        articles.javascript.forEach(card => {
            cards.appendChild(createCard(card.headLine, card.image, card.author));
        })

        articles.technology.forEach(card => {
            cards.appendChild(createCard(card.headLine, card.image, card.author));
        })

        articles.jquery.forEach(card => {
            cards.appendChild(createCard(card.headLine, card.image, card.author));
        })

        articles.node.forEach(card => {
            cards.appendChild(createCard(card.headLine, card.image, card.author));
        })
    })
    .catch(error => {
        console.log(error);
    })

function createCard(headLine, image, author) {
    //Create Elements
    const card = document.createElement('div');
     headLine = document.createElement('div');
     author = document.createElement('div');
    const imageContainer = document.createElement('div');
     image = document.createElement('img');
    const byAuthor = document.createElement('span');
    

    //Assign Classes
    card.classList.add('card');
    headLine.classList.add('.headline');
    author.classList.add('.author');
    imageContainer.classList.add('img-container');

    //Add Text Content
    headLine.textContent = headLine;
    image.src = image;
    author.textContent = author;

    //Link Elements
    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imageContainer);
    author.appendChild(byAuthor);
    imageContainer.appendChild(image);


    return card;
}