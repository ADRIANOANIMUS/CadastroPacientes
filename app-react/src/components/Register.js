import React from 'react'
import FormRegister from './FormRegister'

const Register = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Cadastro de Pacientes</h1>
                    <p className="lead">This is </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <FormRegister/>
                </div>
                <div>
                    <h2>Lista de Pacientes</h2>
                </div>
            </div>            
         </div>
    )
}
export default Register