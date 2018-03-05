const holder = document.createElement('div');
holder.classList.add('holder');
const countBlocks = 48;
//Content for cards
/*Diamonds	Бубны
 Hearts	Червы/черви
 Spades	Пики
 Clubs	    Трефы*/
const cards = ['♢', '♣', '♡', '♠'];
//holder for ElementCard
const arrayElementsCard = [];
const arrayElementsClear = [];
const arrayFiltered = [];


//get random from cards array
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//Obects of cards
function ElementCard(element, index) {
    //properties
    this.index = index;
    this.suits = element.dataset.card;
    this.selected = false;
    this.id = element.id;

    //methods
    this.checkSuits = function (suits) {
        return this.suits === suits;
    };
    this.neighborLeft = function (current) {
        if (this.index % 6 === 0 || this.index === 0) {
            return false;
        }

        else {
            return this.index - 1 === current.index;
        }
    };
    this.neighborRight = function (current) {
        if (this.index === 5 || (this.index - 5) % 6 === 0) {
            return false;
        }
        else {
            return this.index + 1 === current.index;
        }


    };
    this.neighborUp = function (current) {
        return this.index + 6 === current.index;
    };
    this.neighborDown = function (current) {
        return this.index - 6 === current.index;
    };
}


//create html content and fill it and fill arrayElements
for (let i = 0; i < countBlocks; i += 1) {

    const square = document.createElement("div");
    square.classList.add('square');
    const item = getRandom(0, 3);

    switch (item) {
        case 0:
            square.setAttribute('data-card', 'diamonds');
            break;

        case 1:
            square.setAttribute('data-card', 'clubs');
            break;

        case 2:
            square.setAttribute('data-card', 'hearts');
            break;
        case 3:
            square.setAttribute('data-card', 'spades');
            break;
    }

    square.textContent = cards[item];
    square.setAttribute('id', `${i}`);
    holder.appendChild(square);

    const elemntCard = new ElementCard(square, i);
    addToArrayCard(elemntCard, arrayElementsCard);

}

//append content
document.querySelector('body').appendChild(holder);

holder.addEventListener('click', onClick);


function clearContent() {
    arrayFiltered.map((current) => {
        return current.textContent = "";
    })
}

function addElementsCardSameSuitToArray(arrayFrom, suit) {
    arrayFrom.filter((current) => {
        return current.dataset.card === suit;
    })
}


//check if Element present at array and if not includes it there
function addToArrayCard(element, array) {
    if (!array.includes(element)) {
        array.push(element);
        return true;
    }
    else {
        return false;
    }
}


//function for clear same content card onClick
function onClick(event) {
    if (event.target !== event.currentTarget) {

        const targetData = event.target;

        console.log(targetData);
        console.log("targetData");
        console.log(targetData.id + " targetData.id");

        console.log(arrayElementsCard);
        console.log("arrayElementsCard");

        let targetDataElement;

        arrayElementsCard.map((current) => {
            if (targetData.id === current.id) {
                targetDataElement = current;
            }
        });

        addToArrayCard(targetDataElement, arrayElementsClear);
        targetDataElement.selected = true;

        const sameSuitArray = arrayElementsCard.filter((curr) => {
            return curr.suits === targetData.dataset.card;
        });

        for (let i = 0; i < arrayElementsClear.length; i += 1) {
            const tmp = arrayElementsClear[i];

            arrayElementsCard.map(function (current, index) {

                if (tmp.neighborLeft(current)) {
                    if (tmp.checkSuits(current.suits)) {
                        if (current.selected === false) {
                            arrayElementsClear.push(current);
                            current.selected = true;
                        }
                    }
                }


                if (tmp.neighborRight(current)) {
                    if (tmp.checkSuits(current.suits)) {
                        if (current.selected === false) {
                            arrayElementsClear.push(current);
                            current.selected = true;
                        }
                    }
                }

                if (tmp.neighborUp(current)) {
                    if (tmp.checkSuits(current.suits)) {
                        if (current.selected === false) {
                            arrayElementsClear.push(current);
                            current.selected = true;
                        }
                    }

                }

                if (tmp.neighborDown(current)) {
                    if (tmp.checkSuits(current.suits)) {
                        if (current.selected === false) {
                            arrayElementsClear.push(current);
                            current.selected = true;
                        }
                    }
                }

            })
        }

        const clearedIndexes = [];
        arrayElementsClear.map(function (curr) {
            clearedIndexes.push(curr.index);
        });

        const allCards = document.querySelectorAll(`[data-card=${targetDataElement.suits}]`);
        const array = Array.from(allCards);


        for (let i = 0; i < array.length; i += 1) {
            let cur = array[i];
            if (clearedIndexes.includes(parseInt(cur.id))) {
                arrayFiltered.push(cur);
            }
        }

        arrayFiltered.map((current) => {
            return current.classList.add('square__active');
        });

        setTimeout(clearContent, 1000);

    }
}
