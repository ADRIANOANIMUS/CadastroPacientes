import React, { useState } from 'react'

const FormRegister = (props) => {

    const dados = {
        nome: '',
        email: '',
        telefone: ''
    }

    let { values, setValues } = useState(dados)

    const manipuladorInputChange = e => {
        let { nome, value } = e.target

        setValues({
            ...values,
            [nome]: value
        })

    }

    const manipuladorFormEnvio = e => {
        e.preventDefault()
        props.addEdit(values)
    }

    return (
        <fom autoComplete="off" onSubmit={manipuladorFormEnvio}>
            <div className="form-group input-group">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Nome" name="nome" value={values.nome} onChange={manipuladorInputChange} />
            </div>
            <div className="row">
                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="telefone" name="email" value={values.telefone} onChange={manipuladorInputChange} />
                </div>
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="email" name="email" value={values.email} onChange={manipuladorInputChange} />
            </div>
            <div className = "form-group">
                <input type = "submit" value = "save" className = "btn btn-primary btn-block"/>

            </div>
                        
        </fom>
    )
}
export default FormRegister