import React from "react";
import './Login.css'
import { Link } from 'react-router-dom'


class Login extends React.Component {

    componentDidMount() {
        document.getElementById("username").focus()
    }

    render() {
        return (

            <><><header className="header" /><h1>¡¡A leer se dijo!!</h1><h2>Bienvenidos Intecambio de Libros</h2><header />
                <div className="container1">                
                    <p>Uno de los hábitos más importantes que no debería perder la humanidad es Leer.

                        La lectura no solo aumenta el conocimiento, sino que amplía la visión del mundo, el pensamiento y comportamiento de diferentes culturas, permite apreciar la diversidad y riqueza de ideas que genera el pensamiento humano, reflexionar acerca de los comportamientos, ideas, actividades y fenómenos que le rodean; leer desarrolla habilidades para percibir, expresar, argumentar y asumir una actitud crítica; mejora la capacidad para centrar la atención, observación y concentración; impulsa a alcanzar destrezas para establecer relaciones con otros, gracias a un entendimiento más claro de las diferencias humanas y de la diversidad de su entorno.

                        Sabemos que los libros impresos envejecen, ocupan espacio, se pierden o cuestan más, pero tienen cierta magia que no tienen los libros digitales, crean un lazo entre el lector y ellos, producen un sentido de pertenencia, y valor afectivo. Además, permiten controlar mejor la lectura, marcar en ellos, resaltar, leer en grupo, no tienen luz que dañe los ojos, se pueden leer en cualquier lugar, aunque no haya electricidad, se pueden compartir, intercambiar, atesorar y acariciar sus hojas.

                        Como amantes de la lectura, a través de esta página web no solo queremos promover la lectura, sino que compartas esta riqueza con otros al intercambiar un libro. Si quieres un libro intercámbialo por otro.
                    </p>
                </div>

            </><div id="login">
                    <div className="container">
                        <div id="login-row" className="row justify-content-end align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" action="" method="post">
                                        <h3 className="text-center text-info">Iniciar Sesion</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Usuario:</label><br />
                                            <input type="text" name="username" id="username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Contraseña:</label><br />
                                            <input type="text" name="password" id="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <br />
                                            <Link to="/home" className="btn btn-info btn-md">
                                                Ingresar
                                            </Link>
                                        </div>
                                        <div id="register-link" className="text-right">
                                            <Link to="#" className="text-info">Crear Cuenta</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></>
        )
    }
}
export default Login