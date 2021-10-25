import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from '../utils/APIInvoke'
import { Link } from 'react-router-dom'

class PerfilesAdmin extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            libros: []
        }
    }

    async componentDidMount() {
        const response = await APIInvoke.invokeGET("/api/v2/libros")
        this.setState({
            libros: response
        })
    }

    async remove(e, perfil) {
        e.preventDefault();
        await APIInvoke.invokeDELETE(`/api/v2/libros/${perfil.id}`)
    }

    async componentDidUpdate() {
        const response = await APIInvoke.invokeGET("/api/v2/libros")
        this.setState({
            libros: response
        })
    }

    render() {

        const arregloLibros = this.state.libros

        return (
            <div>
                <Navbar />
                <div className="main container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/perfiles-crear" className="btn btn-primary">
                                Crear
                            </Link>
                            <br/> <br/>
                            {
                                arregloLibros.length === 0 ? <div className="alert alert-warning" >No existen Regitros.</div> :
                                    <table className="table table-striped text-center font-weight-bold text-light lead">
                                        <thead>
                                            <tr>
                                                <th scope="col">Codigo</th>
                                                <th scope="col">Titulo</th>
                                                <th scope="col">Autor</th>
                                                <th scope="col">Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                arregloLibros.map(
                                                    perfil =>
                                                        <tr key={perfil.id}>
                                                            <td>{perfil.id}</td>
                                                            <td>{perfil.nombre}</td>
                                                            <td>{perfil.autor}</td>
                                                            <td>
                                                                <Link to={`/perfiles-editar/${perfil.id}`} className="btn btn-info btn-sm" title="Editar">
                                                                    <i className="fa fa-edit"></i>
                                                                </Link>
                                                                &nbsp; &nbsp; &nbsp;
                                                                <button onClick={(e) => this.remove(e, perfil)} className="btn btn-danger btn-sm" title="Eliminar">
                                                                    <i className="fa fa-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                )
                                            }

                                        </tbody>
                                    </table>
                            }

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
export default PerfilesAdmin