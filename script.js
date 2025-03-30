const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

let word;

const correctLetters = ['r', 'a', 'n', 'd', 'o', 'm'];
const wrongLetters = [];

getWord();

async function getWord() {
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    word = data[0];
    displayWord(word);
}

function displayWord(selectedWord = word) {
    wordEl.innerHTML = `
        ${selectedWord
            .split("")
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : " "}
                </span>
            `)
            .join('')
        }`;
    
    const innerWord = wordEl.innerText.replace(/\n/g, '');
    console.log(innerWord,word);
}
                
