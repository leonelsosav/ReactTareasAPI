import React from 'react'


const Tarea = ({ tarea, onClickFn, idx, btnTxt }) => {
    const clickTarea = () => {
        onClickFn(idx);
    }
    return (
        <div className="grid-item">
            <h5 className="titulo">{tarea.name}</h5>
            <h5 className="subtitulo">{`Id: ${tarea.id}`}</h5>
            <h5 className="subtitulo">{`Materia: ${tarea.materia}`}</h5>
            <h5 className="subtitulo">{`Puntos: ${tarea.puntos}`}</h5>
            <h5 className="subtitulo">{`Fecha de entrega: ${tarea.fechaEntrega}`}</h5>
            <h5 className="subtitulo">{`Fecha de creacion: ${tarea.fechaCreacion}`}</h5>
            <button onClick={clickTarea} className="btn">{btnTxt}</button>
        </div>
    )
}

export default Tarea
