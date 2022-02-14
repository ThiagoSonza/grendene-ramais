import "./style.css"
import Tabs from "../../components/Tabs"
import Title from "../../components/Title"
import React, { useState } from "react"
import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";

function NovoContato() {

    const [currentTab, setCurrentTab] = useState('geral')
    const tabs = [
        { "label": "Geral", 'name': 'geral' },
        { "label": "Endereço", 'name': 'endereco' },
        { "label": "Ramais", 'name': 'ramais' },
        { "label": "Telefones", 'name': 'telefones' },
        { "label": "Outros", 'name': 'outros' },
    ]

    return (
        <div className="content">
            <Title label="Novo Contato" />

            <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />

            <div className="wrapper">
                <div className="form-wrapper">
                    <div className="form-group">
                        <label htmlFor=""> Tipo de Contato: </label>
                        <br />
                        <select>
                            <option value=""> Selecione... </option>
                            <option value="1"> Funcionário </option>
                            <option value="1"> Interno </option>
                            <option value="1"> Clube Melissa </option>
                            <option value="1"> Coligadas </option>
                            <option value="1"> VOIP </option>
                            <option value="1"> Abreviados </option>
                            <option value="1"> Clientes </option>
                            <option value="1"> Representante </option>
                            <option value="1"> Fornecedor </option>
                            <option value="1"> Transportadora </option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor=""> Tipo de Contato: </label>
                        <br />
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor=""> Tipo de Contato: </label>
                        <br />
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor=""> Tipo de Contato: </label>
                        <br />
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor=""> Tipo de Contato: </label>
                        <br />
                        <input type="text" />
                    </div>
                </div>
                <button className="btn-save"> Salvar </button>
            </div>

            <div className="wrapper">
                <div className="tb">
                    <table className="table table-auto w-full text-left text-xs">
                        <thead>
                            <tr>
                                <th>Song</th>
                                <th>Artist</th>
                                <th>Year</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                                <td className="col-actions"> <VscEdit /> <AiOutlineDelete /> </td>
                            </tr>
                            <tr>
                                <td>Witchy Woman</td>
                                <td>The Eagles</td>
                                <td>1972</td>
                                <td className="col-actions"> <VscEdit /> <AiOutlineDelete /> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default NovoContato