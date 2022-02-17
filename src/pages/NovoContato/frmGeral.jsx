import React from "react";
import InputMask from 'react-input-mask';

function FrmGeral({ tab, data, change, save }) {

    function handleChange(element) {
        let objData = {}

        const name = element.target.name
        const value = element.target.value

        objData = {
            ...data?.[tab],
            [name]: value
        }

        change(objData)
    }

    return (
        <>
            <div className="form-wrapper">
                <div className="form-group">
                    <label> Origem do Contato: </label>
                    <select name="origem" value={data?.[tab]?.origem || ""} onChange={handleChange}>
                        <option value=""> Selecione... </option>
                        <option value="6"> Funcionário </option>
                        <option value="8"> Interno </option>
                        <option value="12"> Clube Melissa </option>
                        <option value="11"> Coligadas </option>
                        <option value="10"> VOIP </option>
                        <option value="9"> Abreviados </option>
                        <option value="1"> Clientes </option>
                        <option value="4"> Representante </option>
                        <option value="2"> Fornecedor </option>
                        <option value="5"> Transportadora </option>
                    </select>
                </div>

                <div className="form-group">
                    <label> Código: </label>
                    <input name="codigo" type="text" disabled value={data?.[tab]?.codigo || ""} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label> Nome: </label>
                    <input name="nome" type="text" disabled={parseInt(data?.[tab]?.origem) === 6} value={data?.[tab]?.nome || ""} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label> Centro de Custo: </label>
                    <select name="centrocusto" disabled={parseInt(data?.[tab]?.origem) === 6} value={data?.[tab]?.centrocusto || ""} onChange={handleChange}>
                        <option value=""> Selecione... </option>
                        <option value="1"> AAA </option>
                        <option value="2"> BBB </option>
                    </select>
                </div>

                <div className="form-group">
                    <label> Status: </label>
                    <select name="status" disabled={parseInt(data?.[tab]?.origem) === 6} value={data?.[tab]?.status || ""} onChange={handleChange}>
                        <option value=""> Selecione... </option>
                        <option value="A"> Ativo </option>
                        <option value="I"> Inativo </option>
                    </select>
                </div>

                <div className="form-group">
                    <label> CNPJ / CPF: </label>
                    <InputMask
                        mask={(data?.[tab]?.documento || "").length < 15 ? "999.999.999-999" : "99.999.999/9999-99"}
                        maskChar=""
                        value={data?.[tab]?.documento || ""}
                        name="documento"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <button className="btn-save" onClick={save}> Salvar </button>
        </>
    )

}

export default FrmGeral;