const images = document.getElementsByTagName('img');
const tablesDatas = document.getElementsByTagName('td');
const guessTracker = document.getElementById('guesses');
const newButton = document.getElementById('restart');
const row1 = document.getElementById('row-1');
const row2 = document.getElementById('row-2');

for (let i = 0; i < images.length; i++) {
  images[i].setAttribute('src', 'questionMark.png');
}

for (let i = tablesDatas.length; i >= 0; i--) {
  console.log(tablesDatas[i]);

  row1.appendChild(tablesDatas[Math.random() * i | 0])

  if (i >= 4) {
    row2.appendChild(tablesDatas[Math.random() * i | 0])
  }
}

let firstElephant = false;
let secondElephant = false;
let coverImageOne;
let coverImageThree;

let firstDog = false;
let secondDog = false;
let coverImageTwo;
let coverImageFive;

let firstCat = false;
let secondCat = false;
let coverImageFour;
let coverImageSix;

let guesses = 0;

document.addEventListener('click', (event) => {
  if (event.target.matches("#elephant-1")) {
    firstElephant = true;
    
    event.target.setAttribute('src', 'elephant.png');

    coverImageOne = setTimeout(() => {
      firstElephant = false;

      event.target.setAttribute('src', 'questionMark.png');
    }, 500)
  }
  if (event.target.matches("#elephant-2")) {
    secondElephant = true;
    
    event.target.setAttribute('src', 'elephant.png');

    coverImageThree = setTimeout(() => {
      secondElephant = false;
      
      event.target.setAttribute('src', 'questionMark.png');
    }, 500)
  }

  if (firstElephant === true && secondElephant === true) {
    clearTimeout(coverImageOne);
    clearTimeout(coverImageThree);
  }

  if (event.target.matches("#dog-1")) {
    firstDog = true;

    event.target.setAttribute('src', 'dog.png');

    coverImageTwo = setTimeout(() => {
      firstDog = false;

      event.target.setAttribute('src', 'questionMark.png');
    }, 500)
  }
  if (event.target.matches("#dog-2")) {
    secondDog = true;
    
    event.target.setAttribute('src', 'dog.png');

    coverImageFive = setTimeout(() => {
      secondDog = false;
      
      event.target.setAttribute('src', 'questionMark.png');
    }, 500)
  }

  if (firstDog === true && secondDog === true) {
    clearTimeout(coverImageTwo);
    clearTimeout(coverImageFive);
  }

  if (event.target.matches("#cat-1")) {
    firstCat = true;

    event.target.setAttribute('src', 'cat.png');

    coverImageFour = setTimeout(() => {
      firstCat = false;

      event.target.setAttribute('src', 'questionMark.png');
    }, 500)
  }
  if (event.target.matches("#cat-2")) {
    secondCat = true;
    
    event.target.setAttribute('src', 'cat.png');

    coverImageSix = setTimeout(() => {
      secondCat = false;
      console.log(secondCat);
      event.target.setAttribute('src', 'questionMark.png');
    }, 500)
  }

  if (firstCat === true && secondCat === true) {
    clearTimeout(coverImageFour);
    clearTimeout(coverImageSix);
  }

  if (event.target.matches('img')) {
    guesses++;

    guessTracker.innerText = `You've this number of gusses made: ${guesses}`;
  }

  if (guesses > 10) {
    alert('Game over');

    guesses = 0;

    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute('src', 'questionMark.png');
    }
  }
  
  if (firstDog === true && secondDog === true && firstCat === true && secondCat === true && firstElephant === true && secondElephant === true) {
    alert("You've guessed all of the pictures, you win!");

    guesses = 0;

    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute('src', 'questionMark.png');
    }
  }
}) 
