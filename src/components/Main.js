import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const user = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === user._id);
    
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

  React.useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((error) => console.log(error));    
  }, []);

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__overlay" onClick={props.onEditAvatar}></div>
          <img className="profile__avatar" src={user.avatar} alt="Аватарка пользователя" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{user.name}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          <p className="profile__status">{user.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
      </section>
      <section className = "cards page__cards">
        <ul className="cards__list">
          {
            cards.map(card => (
              <Card 
                key={card._id} 
                card={card} 
                onCardClick={props.onCardClick} 
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
             />
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;