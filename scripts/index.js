// @todo: Темплейт карточки

// @todo: DOM узлы



// @todo: Функция создания карточки
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(cardData) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;

    return cardElement;
}

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
initialCards.forEach ((cardData) => {
    const cardElement = createCard(cardData);
    placesList.append(cardElement);
});

// Модальные окна
const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

function closeModal(popup) {      
    popup.classList.remove('popup_is-opened');
}

// Открытие и закрытие модального окна редактирования профиля
const editButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close');

editButton.addEventListener('click', () => {
    openModal(profilePopup);
});


closeButton.addEventListener('click', () => {
    const popup = closeButton.closest('.popup');
    closeModal(popup);
});

// Редактирование профиля
const profileForm = document.querySelector('.popup_type_edit .popup__form');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(profilePopup);
});
