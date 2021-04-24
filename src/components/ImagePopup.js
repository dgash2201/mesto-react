export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card._id && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_image">
        <button className="popup__close-button" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img className="popup__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}