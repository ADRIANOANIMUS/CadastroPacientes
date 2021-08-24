import React, { useState } from 'react'

const FormRegister = () => {

    const dados = {
        nome: '',
        email: '',
        endereco: ''
    }

    let { values, setValues } = useState(dados)

    const manipuladorInputChange = e => {
        let 

    }

    return (
        <fom>
            <div className="form-group input-group">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>

                    </div>

                </div>
                <input className="form-control" placeholder="Nome" name="nome" value={values.nome} onChange={manipuladorInputChange}/>
            </div>
            <div className="row">
                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>

                        </div>

                    </div>
                    <input className="form-control" placeholder="Nome" name="email" value={values.email} onChange={manipuladorInputChange}/>
                </div>
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>

                    </div>

                </div>
                <input className="form-control" placeholder="Nome" name="endereco" value={values.endereco} onChange={manipuladorInputChange}/>
            </div>

        </fom>
    )
}
export default FormRegister