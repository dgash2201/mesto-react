import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const user = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === user._id;
  const cardRemoveButtonClassName = (
    `card__remove ${isOwn ? 'card__remove_visible' : 'card__remove_hidden'}`
  );
  const isLiked = card.likes.some(i => i._id === user._id);
  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active' : ''}`
  );

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card._id);
  }

  return (
    <li className="card">
      <img className="card__image" src={card.link} alt="Карачаевск" onClick={handleCardClick}/>
      <button className={cardRemoveButtonClassName} onClick={handleDeleteClick}></button> 
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeButtonClassName} type="button" aria-label="Лайк" onClick={handleLikeClick}></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;