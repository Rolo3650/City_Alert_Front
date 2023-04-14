import React, { useState } from "react";


const Crear = ({toggleCrear}) => {

    return (
        <>
            <label className="btn btn-primary" id="create-post" onClick={toggleCrear}>
                Crear
            </label>
        </>
    )
}

export default Crear;

