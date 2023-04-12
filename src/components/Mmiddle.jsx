import React from "react";
import user from '../styles/img/user.png';

function Middle() {
    return (
                <div className="middle">
                    <div className="container-publicaciones">
                        publicaciones foreach
                        <div className="feeds">
                            <div className="feed">
                                <div className="head">
                                    <div className="user">
                                        <div className="profile-photo">
                                            <img src={user} />
                                        </div>
                                        <div className="info">
                                            <h3>
                                                Nombre del usuario y correo
                                            </h3>
                                            <small>
                                                ubicacion y hora de publicacion
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="photo">
                                    <h4>
                                        comentario de publicacion
                                    </h4>
                                    obtener img ruta
                                </div>
                                <div className="action-buttons">
                                    <div className="interaction-buttons">
                                        <ul className="list">
                                            categoria colores
                                            <div className="<%= type %> warning">
                                                <span className="material-icons-outlined">
                                                    
                                                </span>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className="comentarios-publicacion">
                                    <div className="caption">
                                        comentarios de publicacion
                                        <p>
                                            <b>
                                                comentario usuario
                                            </b>
                                            fecha
                                            <hr/>
                                                comentario
                                        </p>

                                        <form action="agregar-comentario" method="post" class="create-comment">
                                            <input type="hidden" value="<%= usuario.obtenerIdUsuario() %>"
                                                name="id_usuario"/>
                                            <input type="hidden"
                                                    value="<%= publicacion.obtenerIdPublicacion() %>"
                                                    name="id_publicacion"/>
                                            <input type="text" name="comentario"
                                                        placeholder="Escribe un Comentario..." id="create-comment"
                                                        class="comment"/>
                                            <input type="submit" value="Enviar" class="btn btn-primary"/>
                                        </form>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                                    
                    </div>
                </div>
    )
}

export default Middle;