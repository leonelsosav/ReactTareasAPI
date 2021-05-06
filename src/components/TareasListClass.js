import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const Tarea = props => (
    <tr>
        <td>{props.tarea.id}</td>
        <td>{props.tarea.name}</td>
        <td>{props.tarea.puntos}</td>
        <td>{props.tarea.materia}</td>
        <td>{props.tarea.fechaEntrega}</td>
        <td>{props.tarea.fechaCreacion}</td>
    </tr>
)

class TareasListClass extends Component {

    constructor(props) {
        super(props);
        this.state = { tareas: [] };
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API)
            .then(response => {
                //console.log(this.state.todos);
                this.setState({ tareas: response.data.data });
                //console.log(this.state.todos);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tareasListClass() {
        return this.state.tareas.map(function (currentTarea, i) {
            return <Tarea key={i} tarea={currentTarea}></Tarea>;
        });
    }

    render() {
        return (
            <div className="container">
                <h2>La lista de las tareas</h2>
                <div>
                    <h3>Tareas List</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Materia</th>
                                <th>Puntos</th>
                                <th>Fecha de Creación</th>
                                <th>Fecha de entrega</th
                                ></tr>
                        </thead>
                        <tbody>{this.tareasListClass()}</tbody>
                    </table>
                </div>
            </div>);
    }
}

export default TareasListClass;