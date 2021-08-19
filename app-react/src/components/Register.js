import React from 'react'
import FormRegister from './FormRegister'

const Register = () => {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Cadastro de Pacientes</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <FormRegister/>
                </div>
            </div>            
        </div>
    )
}
export default Register