import React from "react";
import Navbar from "../components/Navbar"
import APIInvoke from "../utils/APIInvoke";
import './PerfilesCrear.css'

class PerfilesCrear extends React.Component {

    constructor(args){
        super(args)
        this.state = {
            nombre: '',
            autor: ''            
        }
    }

    componentDidMount(){
        document.getElementById("nombre").focus()
    }

    handleChange1(e) {
            this.setState({
                nombre: e.target.value
            })            
    }

    handleChange2(c) {
        this.setState({
            autor: c.target.value
        })            
}

    async add() {
        const data = {
            nombre: this.state.nombre,
            autor: this.state.autor
        }

        const response = await APIInvoke.invokePOST('/api/v2/libros', data)
        if (response.id !==0) {
            this.props.history.push('/perfiles')
        } else{
            console.log(response.message)
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="frm">
                    <div className="container">
                        <div id="frm-row" className="row justify-content-end align-items-center">
                            <div id="frm-column" className="col-md-6">
                                <div id="frm-box" className="col-md-12">
                                    <div id="frm-form" className="form">
                                        <h3 className="text-center text-info">Crear Perfil</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Nombre:</label><br />
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

                                        <div className="form-group">
                                            <br />
                                            <button onClick={this.add.bind(this)} className="btn btn-info btn-md">
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
export default PerfilesCrear