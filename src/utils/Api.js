export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  setUserInfo(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      })
    })
      .then(this._checkResponse);
  }

  setUserAvatar(avatarData) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatarData)
    })
      .then(this._checkResponse);
  }

  addCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
    .then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  addCardLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  deleteCardLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    const method = isLiked ? 'DELETE' : 'PUT';
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: method,
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    
    return Promise.reject(`Ошибка: ${res.status}`); 
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  headers: {
    authorization: '61dd454c-d1c5-452b-8062-22ed0eb542c2',
    'Content-Type': 'application/json'
  }
});

export default api;