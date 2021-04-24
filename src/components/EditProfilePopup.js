import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]); 

  return (
    <PopupWithForm 
      name="edit-profile" 
      title="Редактировать профиль" 
      buttonText="Сохранить"
      isOpen={props.isOpen} 
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input 
          className="popup__input popup__input_type_name" 
          type="text" 
          name="username" 
          id="username" 
          placeholder="Имя" 
          minLength='2' 
          maxLength='40' 
          required
          value={name || ''}
          onChange={handleNameChange}
        />
        <span className="popup__input-error username-error"></span>
      </label>
      <label className="popup__field">
        <input 
          className="popup__input popup__input_type_status" 
          type="text" 
          name="status" 
          id="status" 
          placeholder="Статус" 
          minLength='2' 
          maxLength='200'
          required
          value={description || ''}
          onChange={handleDescriptionChange}
        />
        <span className="popup__input-error status-error"></span>
      </label>
    </PopupWithForm>
  );
}