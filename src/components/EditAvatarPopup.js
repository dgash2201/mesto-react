import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup(props) {
  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
  
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm 
      name="edit-avatar" 
      title="Обновить аватар" 
      isOpen={ props.isOpen } 
      onClose={ props.onClose }
      onSubmit={ handleSubmit }
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
          ref={inputRef}
        />
        <span className="popup__input-error avatar-link-error"></span>
      </label>
    </PopupWithForm>
  );
}