import React from 'react';
import '../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';


export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({_id: 0});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(id) {
    api
      .deleteCard(id)
      .then(() => setCards(cards.filter(card => card._id !== id)))
      .catch(error => console.log(error));
  }

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

  function handleUpdateUser(userData) {
    api
      .setUserInfo(userData)
      .then((responseData) => {
        setCurrentUser(responseData);
        closeAllPopups();
      })
      .catch(error => console.log(error));
  }

  function handleUpdateAvatar(avatarData) {
    api
      .setUserAvatar(avatarData)
      .then((responseData) => {
        setCurrentUser(responseData);
        closeAllPopups();
      })
      .catch(error => console.log(error));
  }

  function handleAddPlaceSubmit(cardData) {
    api
      .addCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(error => console.log(error));
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({_id: 0});
  }

  React.useEffect(() => {
    const initialPromises = [api.getUserInfo(), api.getInitialCards()];

    Promise.all(initialPromises)
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main
          cards={cards} 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />

        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

        <PopupWithForm name="confirm" title="Вы уверены?">
        </PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  );
}