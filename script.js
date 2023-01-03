let myLibrary = [];

function Book(title,genre,year,boxart,played){
    //book constructor
    this.gameID = myLibrary.length 
    this.title = title
    this.genre = genre
    this.year = year
    this.boxart = boxart
    this.played = played
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook)
    displayLibrary()
}


function displayLibrary(){

    let libraryCards = document.getElementById('library-cards')
    libraryCards.innerHTML = ''

    myLibrary.forEach(book => {
        // make the book markup and add it to the page
        let libraryCard = document.createElement('div')
        libraryCard.classList.add("library-card")
        libraryCard.setAttribute('id',book.gameID)

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
        playedBtn.onclick = function(){togglePlayed(book)}
        let removeBtn = document.createElement('button')
        removeBtn.onclick = function(){removeCard(book)}

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

        libraryCards.appendChild(libraryCard)
    
    });
}


let addBookBtn = document.getElementById('submit-btn')
let formcloseBtn = document.getElementById('form-close')

formcloseBtn.onclick = function(){
    document.getElementById('popup').style.display = "none"
    event.preventDefault();
}

let openPopup = document.querySelector(".header > button")
openPopup.onclick = function(){

    document.getElementById('popup').style.display = "flex"
    event.preventDefault();
}

addBookBtn.onclick = function(){
    let newBook = new Book(
        document.getElementById('title-input').value,
        document.getElementById('genre-input').value,
        document.getElementById('year-input').value,
        document.getElementById('boxart-input').value,
        document.getElementById('has-played').checked
    )
    console.log(newBook)

    
    addBookToLibrary(newBook)
    console.log("among")
    event.preventDefault();
};

function removeCard(book){
    console.log(book)
    delete myLibrary[book.gameID]
    displayLibrary()
}
function togglePlayed(book){
    console.log(book)
    book.played = !book.played
    displayLibrary()
}

displayLibrary()

/*todo:
form validation
*/