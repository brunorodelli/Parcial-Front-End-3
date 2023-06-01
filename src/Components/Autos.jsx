import React from "react";

const Autos = ({vehiculos}) => {
    return(
        <div className="alquiler">
            <h1>Alquiler de auto</h1>
            <h2>Usted desea un auto de la marca:{vehiculos.marca}</h2>
            <h2>En color:{vehiculos.color}</h2>
        </div>
    )
}








export default Autos