class WeatherApi {
    constructor(options) {
        this._options = options;
    }

    _answerForServer(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getWeatherByCity(city) {
        return fetch(`${this._options.baseUrl}weather?q=${city}&appid=${this._options.authorization}&units=metric&lang=ru`)
        .then((res) => this._answerForServer(res));
    }

    getIp() {
        return fetch("https://ipinfo.io/json?token=6d7db8beb65196")
        .then((res) => this._answerForServer(res));
    }
}

const apiOptions = {
    baseUrl: "https://api.openweathermap.org/data/2.5/",
    authorization: "43a03cf95baf7c1e3256b0f6aa9a38d7",
};

const weatherApi = new WeatherApi(apiOptions);
export default weatherApi;
