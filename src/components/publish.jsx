import React, { useState } from "react";
import user from '../styles/img/user.png';
import alert from '../styles/img/alert-caution.png';
import location from '../styles/img/location.png';
import add from '../styles/img/add-image.png';

import '../styles/Moduls/publish.scss';

const Publish = ({ mostrar }) => {
    
    const estilo = {
        display: mostrar ? 'grid' : 'none'
    };

    return (
        <div className="contenedor2" style={estilo}>
            <div className="wrapper">
                <section className="post">
                    <header>Crear Publicación</header>
                    <form action="agregar-publicacion" method="post">
                        <div className="content">
                            <img src={user} />
                            <div className="details">
                                <p>User</p>
                            </div>
                        </div>
                        <textarea placeholder="Agrega una descripción" required name="comentario"></textarea>
                        <div className="options">
                            <p>Agrega a tu publicación</p>
                            <ul className="list">
                                <li><img src={alert} className="op" id="c1" /></li>
                                <div className="contenido1">
                                    <label>Categoría:</label>
                                    <select id="categoria" name="id_categoria">
                                        <option value=""></option>
                                        <option value="1">Advertencia</option>
                                        <option value="2">Alerta</option>
                                        <option value="3">Emergencia</option>
                                    </select>
                                </div>
                                <li><img src={location} className="op" id="c2" /></li>
                                <div className="contenido2">
                                    <label>Estado:</label>
                                    <select name="Estado" id="estado">
                                        <option value=""></option>
                                        estados
                                        <option value="<%=estado.obtenerIdEstado()%>">
                                            obtener estados
                                        </option>

                                    </select>
                                    <br />
                                    <label>Municipio:</label>
                                    <select className="municipio-select" name="Municipio" id="municipio">
                                        <option value=""></option>
                                        municipios
                                        <option value="<%=municipio.obtenerIdMunicipio()%>">
                                            obtener municipios
                                        </option>

                                    </select>
                                    <br />
                                    <label>Nombre:</label>
                                    <select className="asentamiento-select" name="id_asentamiento" id="nombre">
                                        <option value=""></option>
                                        asentamiento
                                        <option
                                            className="asentamiento inactive municipioId-<%=asentamiento.obtenerMunicipio().obtenerIdMunicipio()%>-"
                                            value="<%=asentamiento.obtenerIdAsentamiento()%>">
                                            obtener asentamiento
                                        </option>

                                    </select>
                                </div>
                                <li><img src={add} className="op" id="c3" /></li>
                                <div className="contenido3">
                                    <input type="text" placeholder="Agrega el link de tu imagen" name="ruta" />
                                </div>
                            </ul>
                        </div>
                        <button id="btn-publicar">Publicar</button>
                        <input type="hidden" name="id_usuario" value="<%= usuario.obtenerIdUsuario() %>" />
                    </form>
                </section>
            </div>
        </div>
    )
}
export default Publish