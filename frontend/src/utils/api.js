class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Произошла ошибка: ${res.status}`);
    }
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Authorization" : `Bearer ${token}`,
      },
    })
    .then(this._checkResponse);
  }

  setUserInfo(userData, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: userData.person,
        about: userData.about,
      }),
    })
    .then(this._checkResponse);
  }

  setAvatar(user, token) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      },
      body: JSON.stringify({
        avatar: user.avatar,
      }),
    })
    .then(this._checkResponse);
  }

  getInitialCards(token) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        "Authorization" : `Bearer ${token}`,
      },
    })
    .then(this._checkResponse);
  }

  addCard(card, token) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: card.heading,
        link: card.url,
      }),
    })
    .then(this._checkResponse);
  }

  toLike(cardID, token) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      method: "PUT",
      headers: {
        "Authorization" : `Bearer ${token}`,
      },
    })
    .then(this._checkResponse);
  }

  toDislike(cardID, token) {
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: {
        "Authorization" : `Bearer ${token}`,
      },
    })
    .then(this._checkResponse);
  }

  deleteCard(cardID, token) {
    return fetch(`${this._baseUrl}/cards/${cardID}`, {
      method: "DELETE",
      headers: {
        "Authorization" : `Bearer ${token}`,
      },
    })
    .then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.timish.nomoredomainsicu.ru",
});

export default api;
