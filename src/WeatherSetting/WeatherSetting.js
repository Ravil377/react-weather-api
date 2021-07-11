import React from "react";
import './WeatherSetting.css';
import burger from '../images/hamburger-menu.svg';
import Loading from "../Loading/Loading";

function WeatherSetting(props) {
    const [city, setCity] = React.useState();
    const { onDragStart, onDragEnd, onDragOver, onDrop, isLoading, isError } = props;

    const handleClickSetting = () => {
        props.isOpenSetting();
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    }

    const handleClickSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(city);
        setCity('');
    }

    const handleClickRemove = (id) => {
        props.onClick(id);
    }

    const dragStartHandler = (e, town) => {
        onDragStart(e, town);
    }

    const dragEndHandler = (e) => {
        onDragEnd(e);
    }
    
    const dragOverHandler = (e) => {
        e.preventDefault();
        onDragOver(e);
    }
    
    const dropHandler = (e, town) => {
        e.preventDefault();
        onDrop(e, town);
    }

    return (
        <>
            <div className="setting">
                <h4 className="setting__title">Settings</h4><button type="button" className="setting__button-close" onClick={handleClickSetting}></button>
                <ul className="setting__list">
                    {props.citys.map((town) => {
                        const { id, name, sys} = town;
                        return (<li key={id} className="setting__list-item"  
                                draggable="true"
                                onDragStart={(e) => dragStartHandler(e, town)} 
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragLeave={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, town)}><img src={burger} className="setting__list-burger" alt="Бургер"></img><p className="setting__list-city">{name}, {sys.country}</p><button type="button" className="setting__button-remove" onClick={() => handleClickRemove(id)}></button></li>)
                    })}
                </ul>
                {isLoading && <Loading />}
                <div className="setting__form-container">
                    <h4 className="setting__title">Add Location:</h4>
                    <form name="addCity" className="setting__form" onSubmit={handleClickSubmit}>
                            <input type="text" name="city" 
                                placeholder="Город"
                                className={`setting__input ${isError && "setting__input-error"}`} 
                                minLength="2" maxLength="40" value={city || ''} onChange={handleChangeCity} 
                                required />
                        <button type="button" className="setting__button-city-enter"></button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default WeatherSetting;