import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    props.onAddPlace({
      name: name,
      link: link,
    });
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm 
      name="add-place" 
      title="Новое место" 
      buttonText="Добавить"
      isOpen={props.isOpen} 
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input 
          className="popup__input popup__input_type_name" 
          type="text" 
          name="name" 
          id="place-name" 
          placeholder="Название" 
          minLength='2' 
          maxLength='30' 
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__input-error place-name-error"></span>
      </label>
      <label className="popup__field">
        <input 
          className="popup__input popup__input_type_link" 
          type="url" 
          name="link" 
          id="link" 
          placeholder="Ссылка на картинку" 
          required
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__input-error link-error"></span>
      </label>
    </PopupWithForm>
  )
}