import React, { useState } from 'react'

const FormRegister = () =>{

    const dados = {
        nome: '',
        email: '',
        endereco: ''
    }

    let { valor, setValues} = useState(dados)

    return(
        <h1>FormRegister</h1>
    )
}
export default FormRegister