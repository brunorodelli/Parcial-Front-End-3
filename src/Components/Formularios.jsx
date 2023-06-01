import React from 'react'

const Formularios = (setVehiculos) => {
    return (
        <div>
            <label>marca:</label>
            <input type="text" onChange={(e) => setVehiculos((prevVehiculos) => ({...prevVehiculos, marca: e.target.value}))} />
            <label>color:</label>
            <input type="text" onChange={(e) => setVehiculos((prevVehiculos) => ({...prevVehiculos, color: e.target.value}))} />
        </div>
    )
}

export default Formularios