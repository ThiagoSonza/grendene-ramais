import React, { useEffect, useState } from "react";

function FrmOutros({ tab, add, auxData, edit }) {

    const [tipo, setTipo] = useState('')
    const [valor, setValor] = useState('')
    const [descricao, setDescricao] = useState('')

    useEffect(() => {
        setTipo(auxData?.[tab]?.tipo || '')
        setValor(auxData?.[tab]?.valor || '')
        setDescricao(auxData?.[tab]?.descricao || '')
    }, [auxData, tab])

    function handleAdd() {
        if (!tipo || !valor || !descricao) return

        const objData = {
            ...auxData?.[tab],
            "tipo": tipo,
            "valor": valor,
            "descricao": descricao
        }

        if (auxData?.[tab]) {
            edit(objData)
        }
        else {
            add(objData)
        }

        clear()
    }

    function clear() {
        setTipo('')
        setValor('')
        setDescricao('')
    }

    return (
        <>
            <div className="form-wrapper">
                <div className="form-group">
                    <label> Tipo de Informação: </label>
                    <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value=""> Selecione... </option>
                        <option value="1"> E-mail </option>
                        <option value="2"> Site </option>
                        <option value="3"> Skype </option>
                    </select>
                </div>

                <div className="form-group">
                    <label> Valor: </label>
                    <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
                </div>

                <div className="form-group">
                    <label> Descrição: </label>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>
            </div>

            <button className="btn-save" onClick={handleAdd}> Salvar </button>
        </>
    )

}

export default FrmOutros