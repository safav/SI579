import ConfettiGenerator from "confetti-js";
import createjs from 'createjs-libs/build/soundjs';
import { FancyTimer } from 'fancy-timer';
let matches = 0;
let cards = [];
let confetti = null;
let playSound = true;
let started = false;


const container = document.getElementById('clock');
const options = {
    value: 60,
    direction: -1,
    warn: {
        secondsLeft: 15
    },
    onWarning() {
        if (playSound) {
            createjs.Sound.play("warning");
        }
    },
    onFinish() {
        if (started) {
            let matched = document.getElementById('number-of-matches');
            matched.innerText = "You Lose 😭 Try again";
        }
        started = false;
    }
};
let ft = new FancyTimer(container, options);
ft.stop();

createjs.Sound.registerSound("gamewin.mp3", "victory");
createjs.Sound.registerSound("drop_003.ogg", "button");
createjs.Sound.registerSound("gamematched6.mp3", "cardmatch");
createjs.Sound.registerSound("clock.mp3", "warning");

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function startGame() {
    if (confetti)
        confetti.clear();
    confetti = new ConfettiGenerator({ target: 'my-canvas' })
    let button = document.getElementsByClassName('active')[0];
    let container = document.getElementById('container');

    ft.stop();
    container.classList.remove('mediummode', 'hardmode');
    let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    deck = shuffle(deck)
    if (button.id === "easy") {
        cards = deck.slice(0, 3)
    }
    else if (button.id === "medium") {
        cards = deck.slice(0, 6)
        container.classList.add('mediummode');
    }
    else {
        cards = deck;
        container.classList.add('hardmode');
    }
    cards = [...cards, ...cards]
    cards = shuffle(cards);
    matches = 0;
    let matched = document.getElementById('number-of-matches');
    matched.innerText = matches + " matches";
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let cardnumber = 1; cardnumber <= cards.length; cardnumber = cardnumber + 1) {
        let flipcard = document.createElement("div");
        flipcard.className = 'flip-card';
        flipcard.id = "card" + cardnumber;
        flipcard.dataset.card = cards[cardnumber - 1];

        let flipcardinner = document.createElement("div");
        flipcardinner.className = 'flip-card-inner';

        let flipcardfront = document.createElement("div");
        flipcardfront.className = 'flip-card-front';

        let flipcardback = document.createElement("div");
        flipcardback.className = 'flip-card-back';
        flipcardback.style.backgroundImage = "url('" + cards[cardnumber - 1] + ".PNG')";

        flipcardinner.appendChild(flipcardfront);
        flipcardinner.appendChild(flipcardback);
        flipcard.appendChild(flipcardinner);
        container.appendChild(flipcard);
        started = false;

        ft.setValue(60);
        ft.update(0, true);
        ft.stop();
        flipcard.addEventListener("click", (e) => {
            if (!started) {
                started = true;
                ft.setValue(60, true);
                ft.update(0, true);
                ft.start();
            }
            if (flipcard.classList.contains('matched')) {
                return;
            }
            let flippedcards = document.getElementsByClassName('flipped');
            if (flippedcards.length >= 2) {
                return;
            }
            flipcard.classList.toggle('flipped');
            flippedcards = document.getElementsByClassName('flipped');
            if (playSound) {
                createjs.Sound.play("button");
            }
            if (flippedcards.length === 2) {
                let card1 = flippedcards[0];
                let card2 = flippedcards[1];
                if (card1.dataset.card === card2.dataset.card) {
                    setTimeout(() => {
                        if (playSound) {
                            createjs.Sound.play("cardmatch");
                        }
                        card1.classList.add('matched');
                        card2.classList.add('matched');
                        card1.classList.remove('flipped');
                        card2.classList.remove('flipped');
                        if (document.getElementsByClassName('matched').length === cards.length) {
                            let matched = document.getElementById('number-of-matches');
                            matched.innerText = "You Win!";
                            ft.stop();
                            started = false;
                            if (playSound) {
                                createjs.Sound.stop();
                                createjs.Sound.play("victory");
                            }
                            confetti.render();
                        }
                    }, 800);

                    matches += 1;
                    let matched = document.getElementById('number-of-matches');
                    matched.innerText = matches + " matches";


                }
                else {
                    setTimeout(() => {
                        card1.classList.remove('flipped');
                        card2.classList.remove('flipped');
                    }, 800);

                }
            }
        })
    }
}


document.getElementById('easy').addEventListener("click", (e) => {
    let buttonselected = document.getElementsByClassName('active')[0];
    buttonselected.classList.remove('active');
    e.target.classList.add('active');
    startGame();
});

document.getElementById('medium').addEventListener("click", (e) => {
    let buttonselected = document.getElementsByClassName('active')[0];
    buttonselected.classList.remove('active');
    e.target.classList.add('active');
    startGame();
});
document.getElementById('hard').addEventListener("click", (e) => {
    let buttonselected = document.getElementsByClassName('active')[0];
    buttonselected.classList.remove('active');
    e.target.classList.add('active');
    startGame();
});

document.getElementById('restart').addEventListener("click", (e) => {
    startGame();
});

document.getElementById('soundbutton').addEventListener("change", (e) => {
    if (e.target.checked) {
        playSound = true;
    }
    else {
        playSound = false;
    }
})

startGame();

