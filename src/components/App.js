import React from 'react';
import '../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({_id: 0});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(userData => setCurrentUser(userData))
      .catch((error) => console.log(error));
  });

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({_id: 0});
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm 
          name="edit-profile" 
          title="Редактировать профиль" 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input className="popup__input popup__input_type_name" 
              type="text" name="username" id="username" 
              placeholder="Имя" minLength='2' maxLength='40' required
            />
            <span className="popup__input-error username-error"></span>
          </label>
          <label className="popup__field">
            <input className="popup__input popup__input_type_status" 
              type="text" name="status" id="status" 
              placeholder="Статус" minLength='2' maxLength='200' required
            />
            <span className="popup__input-error status-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm 
          name="add-place" 
          title="Новое место" 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input className="popup__input popup__input_type_name" 
              type="text" 
              name="name" 
              id="place-name" 
              placeholder="Название" 
              minLength='2' 
              maxLength='30' 
              required
            />
            <span className="popup__input-error place-name-error"></span>
          </label>
          <label className="popup__field">
            <input className="popup__input popup__input_type_link" type="url" name="link" id="link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-error"></span>
          </label>
        </PopupWithForm>
        
        <PopupWithForm 
          name="edit-avatar" 
          title="Обновить аватар" 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input className="popup__input popup__input_type_link" 
              type="url" 
              name="link" 
              id="avatar-link" 
              placeholder="Ссылка на картинку" 
              minLength='2' 
              maxLength='200' 
              required
            />
            <span className="popup__input-error avatar-link-error"></span>
          </label>
        </PopupWithForm>
        
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

        <PopupWithForm name="confirm" title="Вы уверены?">
        </PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
