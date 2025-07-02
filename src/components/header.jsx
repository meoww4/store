import React from 'react';
import logo from '../components/image/logo.jpg';
import "../components/css/my.css";

const Header = () => {
    return (
        <header className="flex">
        <img id="logo" src={logo} alt="logo" />
        <h1 className="title">Добро пожаловать в наш супермагазин</h1>
        </header>

    );
};

export default Header;