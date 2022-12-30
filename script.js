let myLibrary = [];

function Book(title,genre,year,boxart,played){
    //book constructor
    this.title = title
    this.genre = genre
    this.year = year
    this.boxart = boxart
    this.played = played
}

function addBookToLibrary(){
    
}


function displayLibrary(){
    myLibrary.forEach(book => {
        // make the book markup and add it to the page
        let libraryCard = document.createElement('div')
        libraryCard.classList.add("library-card")

        let cardInfo = document.createElement('div')
        cardInfo.classList.add('card-info')

        let textInfo = document.createElement('div')
        textInfo.classList.add('text-info')

        let cardButtons = document.createElement('div')
        cardButtons.classList.add('card-buttons') 

        let titleTag = document.createElement('p')
        let genreTag = document.createElement('p')
        let releaseTag = document.createElement('p')

        let boxartTag = document.createElement('img')

        let playedBtn = document.createElement('button')
        let removeBtn = document.createElement('button')

        // add values based on book
        titleTag.textContent = book.title
        genreTag.textContent = book.genre
        releaseTag.textContent = book.year
        if (book.played){playedBtn.textContent = "played"}
        else{playedBtn.textContent = "not played"}
        removeBtn.textContent = "remove"
        boxartTag.src = book.boxart




        //assemble higerarchy
        textInfo.appendChild(titleTag)
        textInfo.appendChild(genreTag)
        textInfo.appendChild(releaseTag)

        cardInfo.appendChild(textInfo)
        cardInfo.appendChild(boxartTag)

        libraryCard.appendChild(cardInfo)

        cardButtons.appendChild(playedBtn)
        cardButtons.appendChild(removeBtn)

        libraryCard.appendChild(cardButtons)

        let libraryCards = document.getElementById('library-cards')
        libraryCards.appendChild(libraryCard)
    
    });
    console.log('done?')
}

let addBookBtn = document.getElementById('submit-btn')

addBookBtn.onclick = function(){
    let newBook = new Book(
        document.getElementById('title-input').textContent,
        document.getElementById('genre-input').textContent,
        document.getElementById('year-input').textContent,
        document.getElementById('boxart-input').textContent,

        //finish making the book maker
    )
    addBookToLibrary()
    event.preventDefault();
};

let testBook = new Book("spunky","evil game", "2020","https://placekitten.com/400/500",true)
let testBook2 = new Book("spunky 2","evil game", "2021","https://placekitten.com/450/600",true)
myLibrary.push(testBook2)
myLibrary.push(testBook)
displayLibrary()

