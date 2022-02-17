import React, { useEffect, useState } from "react"

function FrmRamais({ tab, add, auxData, edit }) {

    const [ramal, setRamal] = useState('')

    useEffect(() => {
        setRamal(auxData?.[tab]?.ramal || '')
    }, [auxData, tab])

    function handleAdd() {
        if (!ramal) return

        const objData = {
            ...auxData?.[tab],
            "ramal": ramal
        }

        if (auxData?.[tab]) {
            edit(objData)
        }
        else {
            add(objData)
        }

        setRamal('')
    }

    return (
        <>
            <div className="form-wrapper">
                <div className="form-group">
                    <label> Ramal: </label>
                    <input type="text" value={ramal} onChange={(e) => setRamal(e.target.value)} />
                </div>
            </div>

            <button className="btn-save" onClick={handleAdd}> Salvar </button>
        </>
    )

}

export default FrmRamais