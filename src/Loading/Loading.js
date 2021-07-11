import React from 'react';
import Spinner from '../images/loading.svg';
import './Loading.css';

function Loading() {

    return (
        <img src={Spinner} alt="Загрузка" className="loading" />
    );
    
}

export default Loading;