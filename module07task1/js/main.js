/*Используя createElement, написать функцию createUserCard()
 которая динамически создает и возвращает дом узел для такой
 карточки пользователя. Классы оформления добавляем через classList.
 */
const cardHolder = document.querySelector('.holder');

function createUserCard() {

    const cardHolder = document.querySelector('.holder');

    const card = document.createElement('div');
    card.classList.add('card');


    const cardFoto = document.createElement('picture');
    cardFoto.classList.add('card__foto');

    const cardFotoImg = document.createElement('img');
    cardFotoImg.setAttribute('src', "images/module-07-task-4.png");
    cardFotoImg.setAttribute('alt', 'foto');
    /*also one way**************
     cardFotoImg.src = ("images/module-07-task-4.png");*/

    const cardData = document.createElement('div');
    cardData.classList.add('card__data');
    const cardPersonalData = document.createElement('div');
    cardPersonalData.classList.add('card__personalData');

    const name = document.createElement('span');
    name.classList.add('card__name');
    name.textContent = "Claudia Cardinale";

    const divAgeAddress = document.createElement('div');

    const age = document.createElement('p');
    age.classList.add('card__age');
    age.innerText = "29 ";

    const address = document.createElement('address');
    address.textContent = "Philadelphia, PA";

    const cardPersonalDataContainer = document.createElement('div');
    cardPersonalDataContainer.classList.add('card__personalData-container');


    const link1 = document.createElement('a');
    link1.setAttribute('href', '#');
    const strawberry = document.createElement('picture');
    const pictureStrawberry = document.createElement('img');
    pictureStrawberry.setAttribute('src', 'images/module-07-task-1.png');
    pictureStrawberry.setAttribute('alt', 'strawberry');
    strawberry.append(pictureStrawberry);
    link1.append(strawberry);
    const strawberryNmb = document.createElement('span');
    strawberryNmb.classList.add('number');
    strawberryNmb.textContent = '19';

    const link2 = document.createElement('a');
    link2.setAttribute('href', '#');
    const lemon = document.createElement('picture');
    const pictureLemon = document.createElement('img');
    pictureLemon.setAttribute('src', 'images/module-07-task-2.png');
    pictureLemon.setAttribute('alt', 'lemon');
    lemon.append(pictureLemon);
    link2.append(lemon);
    const lemonNmb = document.createElement('span');
    lemonNmb.classList.add('number');
    lemonNmb.textContent = '5';

    const link3 = document.createElement('a');
    link3.setAttribute('href', '#');
    const hand = document.createElement('picture');
    const pictureHand = document.createElement('img');
    pictureHand.setAttribute('src', 'images/module-07-task-3.png');
    pictureHand.setAttribute('alt', 'hand');
    hand.append(pictureHand);
    link3.append(hand);


    cardPersonalDataContainer.append(link1);
    cardPersonalDataContainer.append(strawberryNmb);
    cardPersonalDataContainer.append(link2);
    cardPersonalDataContainer.append(lemonNmb);
    cardPersonalDataContainer.append(link3);


    divAgeAddress.append(age);
    divAgeAddress.append(address);
    cardPersonalData.append(name);
    cardPersonalData.append(divAgeAddress);
    cardPersonalData.append(cardPersonalDataContainer);
    cardData.append(cardPersonalData);

    card.append(cardFoto);
    card.append(cardData);
    cardFoto.append(cardFotoImg);

    cardHolder.append(card);

}



/*Модифицировать createUserCard() так чтобы
она использовала не createElement, а возвращала
строку с тегами, которую потом можно будет поставить
в документ через innerHTML или insertAdjacentHTML.*/

function createUserCard2() {
    const res = `
        <div class="card">
            <picture class="card__foto">
                <img src="images/module-07-task-4.png" alt="foto">
            </picture>
            <div class="card__data">
                <div class="card__personalData">
                    <span class="card__name">Claudia Cardinale</span>
                    <div>
                    	<p class="card__age">29</p>
                    	<address>Philadelphia, PA</address>
                    </div>
                    <div class="card__personalData-container">
                        <a href="#">
                            <picture>
                                <img src="images/module-07-task-1.png" alt="strawberry">
                            </picture>
                        </a>
                        <span class="number">19</span>
                        <a href="#">
                            <picture>
                                <img src="images/module-07-task-2.png" alt="lemon">
                            </picture>
                        </a>
                        <span class="number">5</span>
                        <a href="#">
                            <picture>
                                <img src="images/module-07-task-3.png" alt="hand">
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;

    cardHolder.insertAdjacentHTML('beforeend', res);
}


/*Модифицировать createUserCard(user) так чтобы она принимала объект с
данными для заполнения полей в карточке. Используя createUserCard
создать карточки для 3-х разных пользователей и повесить их в документ.
    Формат обьекта указан ниже.
    const user = {
    img: 'link/to/user-image',
    name: 'Claudia Cardinale',
    age: 29,
    location: 'Philadelphia, PA',
    strawberries: 19,
    lemons: 5
};*/



function createUserCard3(){

    function User (imgUrl,name,age,location,strawberries,lemons){
        this.imgUrl = imgUrl;
        this.name = name;
        this.age = age;
        this.location = location;
        this.strawberries = strawberries;
        this.lemons = lemons;
    }

    const user1 = new User("images/img1.png","Andrii Tokar",34,"Kiev, Goloseevskiy 110",10,20);
    const user2 = new User("images/img2.png","Andrii Tokar2",34,"Kiev, Goloseevskiy 110",8,11);
    const user3 = new User("images/img3.jpg","Andrii Tokar3",34,"Kiev, Goloseevskiy 110",7,45);



    function create(obj) {
        const res = `
        <div class="card">
            <picture class="card__foto">
                <img src="${obj.imgUrl}" alt="foto">
            </picture>
            <div class="card__data">
                <div class="card__personalData">
                    <span class="card__name">${obj.name}</span>
                    <div>
                    	<p class="card__age">29</p>
                    	<address>${obj.location}</address>
                    </div>
                    <div class="card__personalData-container">
                        <a href="#">
                            <picture>
                                <img src="images/module-07-task-1.png" alt="strawberry">
                            </picture>
                        </a>
                        <span class="number">${obj.strawberries}</span>
                        <a href="#">
                            <picture>
                                <img src="images/module-07-task-2.png" alt="lemon">
                            </picture>
                        </a>
                        <span class="number">${obj.lemons}</span>
                        <a href="#">
                            <picture>
                                <img src="images/module-07-task-3.png" alt="hand">
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;

        cardHolder.insertAdjacentHTML('beforeend', res);
    }

    create(user1);
    create(user2);
    create(user3);


}


(function run() {
    const btnCreateElement = document.getElementById('GenerateCreateElement');
    const btnInsertAdjacentHTML = document.getElementById('GenerateInsertAdjacentHTML');
    const btnInsertAdjacentHTMLObj = document.getElementById('GenerateInsertAdjacentHTMLbj');

    btnCreateElement.addEventListener('click', createUserCard);
    btnInsertAdjacentHTML.addEventListener('click', createUserCard2);
    btnInsertAdjacentHTMLObj.addEventListener('click',createUserCard3);

})();

