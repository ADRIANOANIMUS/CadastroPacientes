import React from 'react'
import FormRegister from './FormRegister'
import fireDb from '../firebase'

const Register = () => {

    const addEdit = obj => {

        fireDb.child('pacientes').push(
            obj,
            error => {
                if (error) {
                    console.log(error)
                    
                }
            } 
        )

    }
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Cadastro de Pacientes</h1>
                    <p className="lead">Jumbotron Test</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <FormRegister addEdit ={addEdit}/>
                </div>
                <div>
                    <h2>Lista de Pacientes</h2>
                </div>
            </div>            
         </div>
    )
}
export default Register