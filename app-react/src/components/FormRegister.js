import React, { useState } from 'react'

const FormRegister = () =>{

    const dados = {
        nome: '',
        email: '',
        endereco: ''
    }

    let { values, setValues} = useState(dados)

    return(
       <fom>
           <div className ="form-group input-group">
               <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>

                    </div>

               </div>
                <input className="form-control" placeholder="Nome" name ="nome" value = {values.nome}/>
           </div>
           <div className="row">

           </div>

       </fom>
    )
}
export default FormRegister