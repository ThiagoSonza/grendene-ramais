import React from "react";
import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";

function TblResults({ state, currentTab, del, edit }) {

    const collumns = {
        "ramais": [{ "label": "Ramal", "name": "ramal" }],
        "telefones": [
            { "label": "Tipo Custo", "name": "tipocusto" },
            { "label": "Celular", "name": "celular" },
            { "label": "Telefone", "name": "telefone" }
        ],
        "outros": [
            { "label": "Tipo", "name": "tipo" },
            { "label": "Valor", "name": "valor" },
            { "label": "Descrição", "name": "descricao" }
        ]
    }

    return (
        <>
            {!["geral", "endereco"].includes(currentTab) &&
                <div className="wrapper">
                    <div className="tb">
                        <table className="table table-auto w-full text-left text-xs">
                            <thead>
                                <tr>
                                    <th style={{ "width": "30px" }}> # </th>
                                    {collumns[currentTab].map((col, index) => {
                                        return (
                                            <th key={index}> {col.label} </th>
                                        )
                                    })}
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {(state?.[currentTab] || []).map((item, idxRow) => {
                                    return (
                                        <tr key={idxRow}>
                                            <td> {idxRow + 1} </td>

                                            {collumns[currentTab].map((col, idxCol) => {
                                                return (
                                                    <td key={idxCol}> {item[col.name]} </td>
                                                )
                                            })}

                                            <td className="col-actions">
                                                <VscEdit onClick={() => edit(item)} />
                                                <AiOutlineDelete onClick={() => del(item)} />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            }

        </>

    )

}

export default TblResults