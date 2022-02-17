import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';

function FrmEndereco({ tab, data, change, save }) {

    const [cepValid, setCepValid] = useState(true)

    function handleChange(element) {
        let objData = {}
        let value = ""

        const name = element.target.name

        if (name === "cep")
            value = element.target.value.replace(/[^\d]/g, '')
        else 
            value = element.target.value

        objData = {
            ...data?.[tab],
            [name]: value
        }

        change(objData)
    }

    async function SearchAddress(evt) {
        let cep = evt.target.value.replace(/\D+/g, '')

        await axios.get(`http://viacep.com.br/ws/${cep}/json/unicode/`)
            .then((res) => {
                if (res.data.erro) throw new Error()

                setCepValid(true)

                const response = res.data

                let obj = {
                    ...data?.[tab],
                    "estado": response.uf,
                    "cidade": response.localidade,
                    "bairro": response.bairro,
                    "endereco": response.logradouro
                }

                change(obj)
            })
            .catch(() => setCepValid(false))
    }

    return (
        <>
            <div className="form-wrapper">
                <div className="form-group">
                    <label> CEP: </label>
                    <InputMask maskChar="" mask="99999-999" name="cep" value={data?.[tab]?.cep || ""} onChange={handleChange} onBlur={SearchAddress} />
                </div>

                <div className="form-group">
                    <label> Estado: </label>
                    <input type="text" name="estado" disabled={cepValid} value={data?.[tab]?.estado || ""} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label> Cidade: </label>
                    <input type="text" name="cidade" disabled={cepValid} value={data?.[tab]?.cidade || ""} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label> Bairro: </label>
                    <input type="text" name="bairro" disabled={cepValid} value={data?.[tab]?.bairro || ""} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label> Endereço: </label>
                    <input type="text" name="endereco" disabled={cepValid} value={data?.[tab]?.endereco || ""} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label> Complemento: </label>
                    <input type="text" name="complemento" value={data?.[tab]?.complemento || ""} onChange={handleChange} />
                </div>
            </div>

            <button className="btn-save" onClick={save}> Salvar </button>
        </>
    )

}

export default FrmEndereco