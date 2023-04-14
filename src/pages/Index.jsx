import React, { useContext } from 'react'
import { useState } from 'react';
import { Context } from '../context/useReducer'

import Theme from '../components/Theme';
import Middle from '../components/Mmiddle';
import Right from '../components/Mright';
import Publish from '../components/publish';
import Customize from '../components/Customize';
import Crear from '../components/Crear';

import search from '../styles/img/search.png';
import user from '../styles/img/user.png';
import home from '../styles/img/home (1).png'
import hystory from '../styles/img/history.png'
import question from '../styles/img/question.png'
import alert from '../styles/img/alert.png'
import bell from '../styles/img/bell.png';

const Index = () => {

    const [state, dispatch] = useContext(Context)


    const [mostrarCrear, setMostrarCrear] = useState(false);
    const toggleCrear = () => {
        setMostrarCrear(!mostrarCrear);
    };
    const ocultarCrear = (e) => {
        if (e.target.classList.contains('contenedor2')) {
            setMostrarCrear(false);
        }
    };


    const [OpenTheme, setOpenTheme] = useState(false);
    const OpenModal = () => {
        setOpenTheme(!OpenTheme);
    };
    const closeModal = (e) => {
        if (e.target.classList.contains('customize-theme')) {
            setOpenTheme(false);
        }
    };


    
    return (
        <body>
            <div className="nav">
                <div className="container">
                    <h2 className="log">
                        CityAlert
                    </h2>
                    <div className="search-bar">
                        <img src={search} id="search" />
                        <input type="search" placeholder="Buscar publicación" id="search-value" />
                    </div>
                    <div className="create">
                        <Crear toggleCrear={toggleCrear} />
                        <div className="profile-picture">
                            <a href="/user"><img src={user} className="img" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="conteiner">
                    <div className="left">
                        <a className="profile">
                            <div className="profile-photo">
                                <img src={user} />
                            </div>
                            <div className="handle">
                                <h4>Usuario</h4>
                                <p className="text-muted" id="usuario">
                                    correo
                                </p>
                            </div>
                        </a>

                        <div className="sidebar">
                            <a className="menu-item" href="/home">
                                <span><img src={home} /></span>
                                <h3>Home</h3>
                            </a>
                            <a className="menu-item" href="/cerca-de-ti">
                                <span><img src={hystory} /></span>
                                <h3>Cerca de ti</h3>
                            </a>
                            <div className="menu-item" id="notifications">
                                <span><img src={bell} /></span>
                                <h3 id="notifications-title">Notificaciones</h3>

                                <div className="notifications-popup">
                                    <div className="notification-body">
                                        <b>Actualiza para ver nuevas publicaciones cerca de ti</b>
                                    </div>
                                </div>

                            </div>
                            <a className="menu-item">
                                <span><img src={question} /></span>
                                <h3>Ayuda</h3>
                            </a>
                            <Theme OpenModal={OpenModal} />
                            <a className="menu-item">
                                <span><img src={alert} /></span>
                                <h3>Terminos y condiciones</h3>
                            </a>
                        </div>
                    </div>
                    <Middle />
                    <Right />
                </div>
            </div>
            <div className="a" onClick={closeModal}>
                <Customize open={OpenTheme}/>
            </div>
            <div className="o" onClick={ocultarCrear}>
                <Publish mostrar={mostrarCrear} />
            </div>
        </body>
    )
}

export { Index }