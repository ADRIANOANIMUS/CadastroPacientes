import React, { useEffect, useState} from 'react'

const FormRegister = (props) => {

    const dados = {
        nome: '',
        email: '',
        telefone: ''
    }

    let [ values, setValues ] = useState(dados)

    useEffect(() => {
        if(props.idAtual ==''){
            setValues({
                ...dados
            })
        } else { 
            setValues({
                ...props.dadosPacientes[props.idAtual]
            })
        }
    }, [props.idAtual, props.dadosPacientes] )

    const manipuladorInputChange = e => {
        let { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })

    }

    const manipuladorFormEnvio = e => {
        e.preventDefault()
        props.addEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={manipuladorFormEnvio}>
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
                    <input className="form-control" placeholder="telefone" name="telefone" value={values.telefone} onChange={manipuladorInputChange} />
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
                <input type = "submit" value="Salvar" className="btn btn-primary btn-block"/>

            </div>
                        
        </form>
    )
}
export default FormRegister