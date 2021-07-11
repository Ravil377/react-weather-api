import React from "react";
import Weather from "./Weather/Weather";
import WeatherSetting from "./WeatherSetting/WeatherSetting";
import weatherApi from "./Utils/WeatherApi";

function App() {
    const [isError, setIsError] = React.useState(false);
    const [city, setCity] = React.useState([]);
    const [currentCity, setCurrentCity] = React.useState();
    const [isOpenSetting, setIsOpenSetting] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    document.addEventListener("DOMContentLoaded", () => {
        let returnWeather = localStorage.getItem("myWeather");
        if (!(returnWeather === null)) {
            returnWeather = JSON.parse(returnWeather);
            setCity(returnWeather);
        } else {
            weatherApi
                .getIp()
                .then((res) => {
                    handleClickSubmit(res.city);
                })
                .catch((error) => setIsError(true));
        }
    });

    window.addEventListener("beforeunload", (e) => {
        localStorage.removeItem("myWeather");
        if (city.length > 0) {
            localStorage.setItem("myWeather", JSON.stringify(city));
        }
    });

    const handleClickSetting = () => {
        if (city.length > 0) setIsOpenSetting((state) => !state);
    };

    const checkDuplicate = (newTown) => {
        if (city.length > 0) {
            return city.find((item) => item.id === newTown.id);
        }
        return false;
    };

    const errorAnimation = () => {
      setIsError(true);
      setIsLoading((state) => !state);
      setTimeout(() => setIsError(false), 500);
    }

    const handleClickSubmit = (town) => {
        setIsLoading((state) => !state);
        weatherApi.getWeatherByCity(town).then((newTown) => {
            if (!checkDuplicate(newTown)) {
                setCity((oldTown) => [...oldTown, newTown]);
                setIsLoading((state) => !state);
            } else {
                errorAnimation();
                return;
            }
        }).catch(error => errorAnimation());
    };

    const handleClickRemove = (id) => setCity(() => city.filter((town) => town.id !== id));
    const dragStartHandler = (e, town) => setCurrentCity(town);
    const dragEndHandler = (e) => e.target.style.background = "#ececec";
    const dragOverHandler = (e) => e.target.style.background = "lightblue";
    const dropHandler = (e, town) => {
        setCity(
            city.map((item) => {
                if (item.id === town.id) {
                    return currentCity;
                }
                if (item.id === currentCity.id) {
                    return town;
                }
                return item;
            })
        );
        e.target.style.background = "#ececec";
    };

    return (
        <>
            {isOpenSetting && city ? (
                <WeatherSetting
                    isOpenSetting={handleClickSetting}
                    onSubmit={handleClickSubmit}
                    citys={city}
                    onClick={handleClickRemove}
                    onDragStart={dragStartHandler}
                    onDragEnd={dragEndHandler}
                    onDragOver={dragOverHandler}
                    onDrop={dropHandler}
                    isLoading={isLoading}
                    isError={isError}
                />
            ) : (
                city.map((item) => <Weather key={item.id} isOpenSetting={handleClickSetting} city={item} />)
            )}
        </>
    );
}

export default App;
