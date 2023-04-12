import React from "react";
import search from '../styles/img/search.png';
import user from '../styles/img/user.png';
function Nav() {
    return (
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
                    <label class="btn btn-primary" id="create-post">Crear</label>
                    <div class="profile-picture">
                        <a href="/user"><img src={user} className="img" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;