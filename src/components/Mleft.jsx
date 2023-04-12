import React from "react";
import user from '../styles/img/user.png'
import home from '../styles/img/home (1).png'
import hystory from '../styles/img/history.png'
import question from '../styles/img/question.png'
import paleta from '../styles/img/color-palette.png'
import alert from '../styles/img/alert.png'

function Left() {
    return (
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
                            <span className="material-icons-outlined">
                                notifications
                            </span>
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
                        <a className="menu-item" id="theme">
                            <span><img src={paleta} /></span>
                            <h3>Tema</h3>
                        </a>
                        <a className="menu-item">
                            <span><img src={alert} /></span>
                            <h3>Terminos y condiciones</h3>
                        </a>
                    </div>
                </div>

            
    )
}

export default Left;