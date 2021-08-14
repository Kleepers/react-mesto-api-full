import {auth} from "../utils/auth";
import Header from './Header'
import Main from './Main'
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from 'react';
import {api} from '../utils/api';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import {Route, Switch, withRouter} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";

function App(props) {


    function handleEditProfileClick  () {
        setIsEditProfileOpen(true)
    }

    function handleEditAvatarClick () {
        setIsEditAvatarPopupOpen(true)
    }

    function handleAddPlaceClick () {
        setIsAddPlacePopupOpen(true)
    }

    function handlePlaceDeletePopupOpen () {
        setIsPlaceDeletePopupOpen(true)
    }

    function handleCardClick (card) {
        setSelectedCard(card)
    }

    const [isEditProfilePopupOpen,setIsEditProfileOpen] = React.useState(false);
    const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen,setIsAddPlacePopupOpen] = React.useState(false);
    const [isPlaceDeletePopupOpen,setIsPlaceDeletePopupOpen] = React.useState(false);
    const [isInfoTooltipOpen,setIsInfoTooltipOpen] = React.useState(false);
    const [isError,setIsError] = React.useState(false);
    const [isLoggedIn,setIsLoggedIn] = React.useState(false);
    const [headerEmail,setHeaderEmail] = React.useState('');


    const [selectedCard,setSelectedCard] = React.useState({name: '', link: ''});

    const [currentUser,setCurrentUser] = React.useState({name: '', link: '', avatar: ''});

    const [cards,setCards] = React.useState([]);

    function handleInfoTooltipOpen (status) {
        setIsError(status);
        setIsInfoTooltipOpen(true);
    }

    function handleLogStatus (status) {
        setIsLoggedIn(status);
    }

    function onRegister (authPass,authMail) {
            auth.onRegister(authPass,authMail)
                .then((res) => {
                    console.log(res);
                if(typeof res === "undefined") {
                    handleInfoTooltipOpen(true);
                }
                else  {
                    handleInfoTooltipOpen(false);
                    props.history.push('/sign-in')
                }
            })
            .catch(err => console.log(err))
    }

    function onLogin (pass,mail) {
        auth.onLogin(pass,mail)
            .then((res) => {
                if (res.message === 'Логин прошел успешно') {
                    handleLogStatus(true);
                    props.history.push('/');
                    setHeaderEmail(mail);
                }
            })
            .catch(err => {
                console.log(err)
                setHeaderEmail('');
                setIsInfoTooltipOpen(true);
                setIsError(true);
            })
    }

    function handleLogout () {
        auth.logout()
            .then((res) => {
                if (res.ok) {
                    handleLogStatus(false);
                    setHeaderEmail('');
                    props.history.push('signin');
                    setCurrentUser({name: '', link: '', avatar: ''});
                }
                })
            }

    function checkToken() {
        auth.getUser()
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    handleLogStatus(false);
                    setHeaderEmail('');
                    props.history.push('/signin');
                }else{
                    handleLogStatus(true);
                    props.history.push('/');
                }
            })
            .catch(err => console.error(err))
    }

    React.useEffect(() => {
        checkToken();
    },[])

    React.useEffect(() => {
        Promise.all([api.getUserInfoApi(),api.getInitialCards()])
            .then(([userData,initialCards]) => {
                if (userData && initialCards) {
                    setCards(initialCards);
                    setCurrentUser(userData);
                }
            })
            .catch(err => console.log(`Ошибка при получении данных: ${err}`))
    },[isLoggedIn])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id,!isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
            .catch(err => console.log(`Ошибка: ${err}`))
    }

    function handleCardDelete(cardToDeleteId) {
        api.deleteCard(cardToDeleteId).then(() => {
            setCards(cards.filter(function(card) {
                return card._id !== cardToDeleteId;
            }))
        })
            .catch(err => console.log(`Ошибка: ${err}`))
    }

    function closeAllPopups () {
        setIsEditProfileOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsPlaceDeletePopupOpen(false);
        setIsInfoTooltipOpen(false);
        setSelectedCard({name: '', link: ''});
    }

    function handleUpdateUser (formData) {
        api.updateUserInfo(formData)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
        })
            .catch(err => console.log(`Ошибка: ${err}`))
    }

    function handleUpdateAvatar (formData) {
        api.updateUserAvatar(formData).then((res) => {
            setCurrentUser(res);
            closeAllPopups();
        })
            .catch(err => console.log(`Ошибка: ${err}`))
    }

    function handleAddPlaceSubmit (formData,owner) {
        api.addNewCard(formData,owner).then((res) => {
            setCards([res,...cards]);
            closeAllPopups();
        })
            .catch(err => console.log(`Ошибка: ${err}`))
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <Header onLogout={handleLogout}/>

            <Switch>
                <Route path='/sign-in'>
                    <Login onAuthorization={handleLogStatus} onLogin={onLogin} cleaner={headerEmail}/>
                </Route>
                <Route path='/sign-up'>
                    <Register onRegister={onRegister}/>
                </Route>
                <ProtectedRoute exact path='/' loggedIn={isLoggedIn} component={Main}
                                onEditProfile={handleEditProfileClick}
                                onAddPlace={handleAddPlaceClick}
                                onEditAvatar={handleEditAvatarClick}
                                onCardClick={handleCardClick}
                                onCardDelete={handleCardDelete}
                                onCardLike={handleCardLike}
                                cards={cards} />
            </Switch>

            <Footer/>
            <EditProfilePopup onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser}/>

            <AddPlacePopup onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} onAddPlace={handleAddPlaceSubmit}/>
            <EditAvatarPopup onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} onUpdateAvatar={handleUpdateAvatar}/>

            <PopupWithForm name='delete' title='Вы уверены?' isOpen={isPlaceDeletePopupOpen} onClose={closeAllPopups}/>

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            <InfoTooltip isOpen={isInfoTooltipOpen} isError={isError} onClose={closeAllPopups}/>
        </div>
        </CurrentUserContext.Provider>
  )
}

export default withRouter(App);



