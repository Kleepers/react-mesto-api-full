
class Auth {

    constructor({baseUrl,headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getResponse(res) {
        if (res.ok) {
            return res.json();
        }
        else{
            Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    onRegister(authPass, authMail) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                password: authPass,
                email: authMail
            })
        })
            .then(this.getResponse)
    }

    onLogin (pass,mail) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                password: pass,
                email: mail
            })
        })
            .then(this.getResponse)
    }

    getUser() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(this.getResponse)
    }

    logout(id) {
        return fetch(`${this._baseUrl}/logout`, {
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify({
                _id: id
            })
        })
            .then(this.getResponse)
    }

}


const authConfig = {
    baseUrl: 'api.kleepers.mesto.nomoredomains.club',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

export const auth = new Auth(authConfig);