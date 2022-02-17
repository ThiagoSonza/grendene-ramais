import "./style.css"
import Tabs from "../../components/Tabs"
import Title from "../../components/Title"
import React, { useState } from "react"
import FrmEndereco from "./frmEndereco"
import FrmRamais from "./frmRamais";
import FrmTelefones from "./frmTelefones";
import FrmOutros from "./frmOutros";
import FrmGeral from "./frmGeral";
import TblResults from "./tblResults";

function NovoContato() {

    const [state, setState] = useState()
    const [auxData, setAuxData] = useState()
    const [currentTab, setCurrentTab] = useState('geral')

    function reorganizeResults(results) {
        return results.map((item, index) => item = { ...item, key: `row-${index}` })
    }

    function handleChange(element) {
        setState({ ...state, [currentTab]: element})
    }

    function handleSave() {
        console.log(state)
    }

    function handleAdd(dataRow) {
        let data = []

        data = [...state?.[currentTab] || [], dataRow]
        data = reorganizeResults(data)

        setState({ ...state, [currentTab]: data })
    }

    function handleEdit(row) {
        setAuxData({ [currentTab]: row })
    }

    function handleUpdate(row) {
        let data = []

        data = state?.[currentTab].map((item) => {
            if (item.key === row.key) {
                item = row
            }
            return item
        })

        setState({ ...state, [currentTab]: data })
    }

    function handleDelete(row) {
        let data = []

        data = state[currentTab].filter(item => item.key !== row.key)
        data = reorganizeResults(data)

        setState({ ...state, [currentTab]: data })
    }

    return (
        <div className="content">
            <Title label="Novo Contato" />

            <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

            <div className="wrapper">
                {/* form GERAL */}
                {currentTab === "geral" &&
                    <FrmGeral tab={currentTab} data={state} change={handleChange} />
                }

                {/* form ENDEREÇO */}
                {currentTab === "endereco" &&
                    <FrmEndereco tab={currentTab} data={state} change={handleChange} save={handleSave} />
                }

                {/* form RAMAIS */}
                {currentTab === "ramais" &&
                    <FrmRamais tab={currentTab} add={handleAdd} auxData={auxData} edit={handleUpdate} />
                }

                {/* form TELEFONES */}
                {currentTab === "telefones" &&
                    <FrmTelefones tab={currentTab} add={handleAdd} auxData={auxData} edit={handleUpdate} />
                }

                {/* form OUTROS */}
                {currentTab === "outros" &&
                    <FrmOutros tab={currentTab} add={handleAdd} auxData={auxData} edit={handleUpdate} />
                }
            </div>

            <TblResults state={state} currentTab={currentTab} del={handleDelete} edit={handleEdit} />
        </div>
    )

}

export default NovoContato