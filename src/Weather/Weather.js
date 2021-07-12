import React from "react";
import './Weather.css';
import setting from "../images/settings.png";
import arrow from '../images/navigation-cursor.svg';

function Weather(props) {
  const { name, visibility, main, sys, wind, weather } = props.city;

    const arrowRotate = {
      transform: `rotate(${180+wind?.deg}deg)`
    }

    const handleClickSetting = () => {
      props.isOpenSetting();
    }

    return (
      <div className="weather">
        <ul className="weather__items">
            <li className="weather__item"><h4 className="weather__title">{name}, {sys?.country }</h4>
              {props.isCount === 0 && <img src={setting} alt="Настройка" className="weather__setting" onClick={handleClickSetting}></img>}
            </li>
            <li className="weather__item weather__image">
              <img className="weather__icon" src={`http://openweathermap.org/img/wn/${weather && weather[0].icon}@2x.png`} 
                    alt={weather && weather[0].description} />
              <p className="weather__temperature">{Math.floor(main?.temp)}&deg;C</p>
            </li>
            <li className="weather__item"><p className="weather__description">Ощущается как {Math.floor(main?.feels_like)}&deg;C. {weather && weather[0].description}</p></li>
            <li className="weather__item">
              <div className="weather__wind"><img src={arrow} alt="arrow wind" className="weather__description-wind-arrow" style={arrowRotate}></img><p className="weather__description"></p><p className="weather__description">{wind?.speed}m/s</p></div>
              <p className="weather__description">{main?.pressure}hPa</p></li>
            <li className="weather__item"><p className="weather__description">Humidity: {main?.humidity}%</p><p className="weather__description">Dew point: 0C</p></li>
            <li className="weather__item"><p className="weather__description">Visibility: {Math.floor(visibility/1000)}.0km</p></li>
        </ul>
      </div>
    );
  }
  
  export default Weather;
  