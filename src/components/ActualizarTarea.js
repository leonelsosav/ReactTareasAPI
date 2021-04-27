import React, { useEffect, useState } from 'react';
import './Tabla.css';
import Tarea from './Tarea';
import FormTarea from './FormTarea';

const ActualizarTarea = () => {
    const [tareas, setTareas] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({});
    const [idAEditar, setIdAEditar] = useState("-1");
    useEffect(() => {
        const fetchTareas = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API);
                return response.json();
            } catch (err) {
                console.log(err);
            }
        }
        fetchTareas().then(res => setTareas(res.data));
    }, []);

    const openEditForm = (idx) => {
        setIdAEditar(tareas[idx]._id);
        setFormData({
            nombre: tareas[idx].name, materia: tareas[idx].materia,
            puntos: tareas[idx].puntos, fechaEntrega: tareas[idx].fechaEntrega.substring(0, 10)
        });
        setShowForm(true);
    }

    const updateTareas = (data) => {
        fetch(`${process.env.REACT_APP_API}/${idAEditar}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(dataResponse => {
            setTareas(tareas.map(tarea => tarea.id === dataResponse.data.id ? dataResponse.data : tarea));
            setShowForm(false);
        });
    }
    return (
        <>
            {showForm && <div onBlur={() => console.log("h")}>
                <button className="new-btn" onClick={() => setShowForm(false)}>Cerrar</button>
                <FormTarea initData={formData} onClickFn={updateTareas} btnTxt={"Actualizar Tarea"}></FormTarea>
            </div>}
            <div className="grid-container">
                {tareas.map((tarea, idx) => {
                    return (
                        <Tarea key={idx} tarea={tarea} onClickFn={openEditForm} idx={idx} btnTxt={"Editar"} />
                    );
                })}
            </div>
        </>
    )
}

export default ActualizarTarea
