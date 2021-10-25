import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from "../utils/APIInvoke";
import './PerfilesEditar.css'

class PerfilesEditar extends React.Component {

    constructor(args){
        super(args)
        this.state = {
                id: '',
                nombre: '',
                autor: ''
        }
    }

    async componentDidMount(){
        document.getElementById("nombre").focus()
        const perfilId = this.props.match.params.perfilId
        const response = await APIInvoke.invokeGET(`/api/v2/libros/${perfilId}`)
        this.setState({
            id: response.id,
            nombre: response.nombre,
            autor: response.autor
        })
    }

    
    
    handleChange1(e) {
        this.setState({
            nombre: e.target.value,            
        });           
}

    handleChange2(c) {
        this.setState({
             autor: c.target.value,            
    });           
}

    async edit() {
        const data = {
            id: this.state.id,
            nombre: this.state.nombre,
            autor: this.state.autor
        }

        const response = await APIInvoke.invokePUT(`/api/v2/libros`, data)
        if(response.id !==0){
            this.props.history.push(`/perfiles`)
        } else {
            console.log(response.message)
        }
    }


    render() {
        return (
            <div>
                <Navbar />
                <div id="fem">
                    <div className="container">
                        <div id="fem-row" className="row justify-content-end align-items-center">
                            <div id="fem-column" className="col-md-6">
                                <div id="fem-box" className="col-md-12">
                                    <div id="fem-form" className="form">
                                        <h3 className="text-center text-info">Editar Perfil</h3>
                                        <div className="form-group">
                                            <label htmlFor="nombre" className="text-info">Nombre:</label><br />
                                            <input type="text" name="nombre" id="nombre" className="form-control"
                                                value={this.state.nombre}
                                                onChange={this.handleChange1.bind(this)}
                                                />                                                             
                                        </div>

                                        <div className="form-group">                                            
                                            <label htmlFor="autor" className="text-info">Autor:</label><br />
                                            <input type="text" name="autor" id="autor" className="form-control"
                                                value={this.state.autor}
                                                onChange={this.handleChange2.bind(this)}                                                  
                                            />
                                        </div>

                                        <div className="form">
                                            <br />
                                            <button onClick={this.edit.bind(this)} className="btn btn-info btn-md">
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        )
    }
}
export default PerfilesEditar