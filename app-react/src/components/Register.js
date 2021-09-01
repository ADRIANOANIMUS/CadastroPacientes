import React, { useState, useEffect } from 'react'
import FormRegister from './FormRegister'
import fireDb from '../database/firebase'

const Register = () => {

    let [dadosPacientes, setDadosPacientes] = useState({})

    useEffect(() => {
        fireDb.child('pacientes').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDadosPacientes({
                    ...dbPhoto.val()
                })
            }
        })
    }, [])

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
                    <p className="lead">Dados do Paciente</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <FormRegister addEdit={addEdit} />
                </div>
                <div className="col-md-7">
                    <table className="table table-boderless table-stripped">

                        <thead className="thead-light">
                            <tr>
                                <td>Nome</td>
                                <td>Email</td>
                                <td>Telefone</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(dadosPacientes).map(id => {
                                    return <tr key={id}>
                                        <td>{dadosPacientes[id].nome}</td>
                                        <td>{dadosPacientes[id].email}</td>
                                        <td>{dadosPacientes[id].telefone}</td>
                                    </tr>
                                }
                                )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}
export default Register