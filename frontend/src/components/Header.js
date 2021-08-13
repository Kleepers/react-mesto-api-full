import logo from "../images/logo.svg";
import React from 'react';
import { Link, Route, Switch} from "react-router-dom";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Header (props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
            <header className="header">
                <img className="header__logo" src={logo} alt="логотип"/>
                <Switch>
                    <Route path='/sign-in'>
                        <Link className='header__button' to='sign-up'>Регистрация</Link>
                    </Route>
                    <Route path='/sign-up'>
                        <Link className='header__button' to='sign-in'>Войти</Link>
                    </Route>
                    <Route exact path='/'>
                        <p className='header__email'>{currentUser.email}</p>
                        <Link className='header__button' to='sign-in' onClick={props.onLogout}>Выйти</Link>
                    </Route>
                </Switch>
            </header>
    );
}