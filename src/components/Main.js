import React from "react";
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const initialPromises = [api.getUserInfo(), api.getInitialCards()];

    Promise.all(initialPromises)
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      })
      .catch((error) => console.log(error));    
  }, []);

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__overlay" onClick={props.onEditAvatar}></div>
          <img className="profile__avatar" src={userAvatar} alt="Аватарка пользователя" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          <p className="profile__status">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
      </section>
      <section className = "cards page__cards">
        <ul className="cards__list">
          {
            cards.map(card => (
              <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;