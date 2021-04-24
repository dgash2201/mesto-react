import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__overlay" onClick={props.onEditAvatar}></div>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватарка пользователя" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          <p className="profile__status">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
      </section>
      <section className = "cards page__cards">
        <ul className="cards__list">
          {
            props.cards.map(card => (
              <Card 
                key={card._id} 
                card={card} 
                onCardClick={props.onCardClick} 
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            ))
          }
        </ul>
      </section>
    </main>
  );
}