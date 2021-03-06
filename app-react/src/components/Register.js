import React, { useState, useEffect } from 'react'
import FormRegister from './FormRegister'
import fireDb from '../database/firebase'

const Register = () => {

    let [dadosPacientes, setDadosPacientes] = useState({})

    let [idAtual, setidAtual] = useState('')

    useEffect(() => {
        fireDb.child('pacientes').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDadosPacientes({
                    ...dbPhoto.val()
                })
            }else{
                setDadosPacientes({})
            }
        })
    }, [])

    const addEdit = obj => {

        if (idAtual == '') {

            fireDb.child('pacientes').push(
                obj,
                error => {
                    if (error) {
                        console.log(error)

                    } else {
                        setidAtual('')
                    }
                }
            )

        } else {
            fireDb.child(`pacientes/${idAtual}`).set(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )

        }
    }

    const deletePaciente = key => {
        if (window.confirm('Deseja realmente excluir o cadastro?')) {
            fireDb.child(`pacientes/${key}`).remove(
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )

        }
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
                    <FormRegister {...({ addEdit, idAtual, dadosPacientes })} />
                </div>
                <div className="col-md-7">
                    <table className="table table-boderless table-stripped">

                        <thead className="thead-light">
                            <tr>
                                <td>Nome</td>
                                <td>Email</td>
                                <td>Telefone</td>
                                <td>A????es</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(dadosPacientes).map(id => {
                                    return <tr key={id}>
                                        <td>{dadosPacientes[id].nome}</td>
                                        <td>{dadosPacientes[id].email}</td>
                                        <td>{dadosPacientes[id].telefone}</td>
                                        <td>
                                            <a className="btn btn-primary" onClick={() => { setidAtual(id) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>

                                            <a className="btn btn-danger" onClick={() => deletePaciente(id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </a>

                                        </td>
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