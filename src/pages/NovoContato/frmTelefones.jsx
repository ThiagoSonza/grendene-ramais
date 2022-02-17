import React, { useEffect, useState } from "react";

function FrmTelefones({ tab, add, auxData, edit }) {

    const [tipoCusto, setTipoCusto] = useState('')
    const [isCelular, setIsCelular] = useState('')
    const [ddi, setDDI] = useState('')
    const [ddd, setDDD] = useState('')
    const [telefone, setTelefone] = useState('')

    useEffect(() => {
        setTipoCusto(auxData?.[tab]?.tipocusto || '')
        setIsCelular(auxData?.[tab]?.celular || '')
        setDDI(auxData?.[tab]?.ddi || '')
        setDDD(auxData?.[tab]?.ddd || '')
        setTelefone(auxData?.[tab]?.telefone || '')
    }, [auxData, tab])

    function handleAdd() {
        if (!tipoCusto || !isCelular || !ddi || !ddd || !telefone) return

        const objData = {
            ...auxData?.[tab],
            "tipocusto": tipoCusto,
            "celular": isCelular,
            "ddi": ddi,
            "ddd": ddd,
            "telefone": telefone
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
        setTipoCusto('')
        setIsCelular('')
        setDDI('')
        setDDD('')
        setTelefone('')
    }

    return (
        <>
            <div className="form-wrapper">
                <div className="form-group">
                    <label> Tipo Custo: </label>
                    <select value={tipoCusto} onChange={(e) => setTipoCusto(e.target.value)}>
                        <option value=""> Selecione... </option>
                        <option value="1"> Custo Zero </option>
                        <option value="2"> Custo Médio </option>
                        <option value="3"> Custo Alto </option>
                    </select>
                </div>

                <div className="form-group">
                    <label> Celular: </label>
                    <select value={isCelular} onChange={(e) => setIsCelular(e.target.value)}>
                        <option value=""> Selecione... </option>
                        <option value="S"> Sim </option>
                        <option value="N"> Não </option>
                    </select>
                </div>

                <div className="form-group">
                    <label> DDI: </label>
                    <input type="text" maxLength={2} value={ddi} onChange={(e) => setDDI(e.target.value)} />
                </div>

                <div className="form-group">
                    <label> DDD: </label>
                    <input type="text" maxLength={2} value={ddd} onChange={(e) => setDDD(e.target.value)} />
                </div>

                <div className="form-group">
                    <label> Telefone: </label>
                    <input type="text" maxLength={10} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </div>
            </div>

            <button className="btn-save" onClick={handleAdd}> Salvar </button>
        </>
    )

}

export default FrmTelefones