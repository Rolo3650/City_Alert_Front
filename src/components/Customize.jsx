import React from "react";

function Customize(){
    return(
        <div className="card">
            <h2>Editar</h2>
            <p className="text-muted">Manega el fondo, colores y tamaño de letra </p>
            <div className="font-size">
                <h4>Tamaño de letra</h4>
                <div>
                    <h6>Aa</h6>
                    <div className="choose-size">
                        <span className="font-size-1"></span>
                        <span className="font-size-2"></span>
                        <span className="font-size-3"></span>
                        <span className="font-size-4"></span>
                        <span className="font-size-5"></span>
                    </div>
                    <h3>Aa</h3>
                </div>
            </div>
            <div class="color">
                <h4>Color</h4>
                <div class="choose-color">
                    <span className="color-1 active"></span>
                    <span className="color-2 active"></span>
                    <span className="color-3 active"></span>
                </div>
            </div>
            <div className="background">
                <h4>Fondo</h4>
                <div className="choose-bg">
                    <div className="bg-1 active">
                        <span></span>
                        <h5 for="bg-1">Claro</h5>
                    </div>
                    <div className="bg-2">
                        <span></span>
                        <h5 for="bg-2">Oscuro</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customize