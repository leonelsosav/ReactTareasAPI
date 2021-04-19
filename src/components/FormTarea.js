import React, { useState } from 'react'

const FormTarea = ({ onClickFn, btnTxt, initData }) => {
    const [nombre, setNombre] = useState(initData ? initData.nombre : "");
    const [materia, setMateria] = useState(initData ? initData.materia : "");
    const [puntos, setPuntos] = useState(initData ? initData.puntos : "");
    const [fechaEntrega, setFechaEntrega] = useState(initData ? initData.fechaEntrega : "");
    const onSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || materia === "" || puntos === "" || fechaEntrega === "") alert("No puede dejar ningun campo vacio");
        else {
            let data = { name: nombre, materia: materia, puntos: puntos, fechaEntrega: fechaEntrega }
            onClickFn(data);
        }
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="formQ">
                    <label >Nombre: </label>
                    <input type="text" value={nombre} onChange={(txt) => setNombre(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Materia: </label>
                    <input type="text" value={materia} onChange={(txt) => setMateria(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Puntos: </label>
                    <input type="number" value={puntos} onChange={(txt) => setPuntos(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Fecha de entrega: </label>
                    <input type="date" value={fechaEntrega} onChange={(txt) => setFechaEntrega(txt.target.value)} />
                </div>
                <input className="input-btn" type="submit" value={btnTxt} />
            </form>
        </div>
    )
}

export default FormTarea
