import React, { useState } from "react"
import Title from "../../components/Title"
import "./style.css"

function Importacao() {

    const [data, setData] = useState()

    function handleFile(e) {
        console.log(e.target.files[0])

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const text = e.target.result;
            console.log(text);
            let result = processCSV(text) // plugged in here
            console.log(result)
        }

        reader.readAsText(file);
    }

    const processCSV = (str, delim = ';') => {
        const headers = str.slice(0, str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n') + 1).split('\n');

        const newArray = rows.map(row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

        setData(newArray)
        return newArray
    }

    function handleImport() {
    }

    return (
        <div className="content">

            <Title label="Importar Contatos" /> 

            <div className="sub-title2">
                <div className="form-group">
                    <label htmlFor=""> Tipo de Contato: </label>
                    <br />
                    <select>
                        <option value=""> Selecione... </option>
                        <option value="1"> Clube Melissa </option>
                        <option value="2"> Fornecedores </option>
                    </select>
                </div>

                {data ?
                    (
                        <button onClick={handleImport}> Importar </button>
                    )
                    :
                    (
                        <label className="custom-file-upload">
                            <input hidden type="file" accept='.csv' onChange={handleFile} />
                            Selecionar Arquivo
                        </label>
                    )
                }
            </div>

            {data &&
                <div className="tb">
                    <table className="table table-auto w-full text-left text-xs">
                        <thead>
                            <tr>
                                <th> Song </th>
                                <th> Artist </th>
                                <th> Year </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td> {item.Tab1} </td>
                                        <td> {item.tab2} </td>
                                        <td> {item.tab3} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            }

        </div>

    )

}

export default Importacao