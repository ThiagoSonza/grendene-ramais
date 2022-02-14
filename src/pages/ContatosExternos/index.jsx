import { BiSearch } from 'react-icons/bi';
import Title from "../../components/Title"
import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import TabsCategory from '../../components/TabsCategory';
import React, { useState } from 'react';

function ContatosExternos() {

    const navigate = useNavigate()
    const [categCurrent, setCategCurrent] = useState('cbMelissa')
    const categories = [
        {'label': "Clube Melisssa", 'name': 'cbMelissa'},
        {'label': "Fornecedores", 'name': 'fornecedores'},
        {'label': "Outros", 'name': 'outros'},
    ]

    return (
        <div className="content">

            <Title label="Contatos Externos">
                <div className="search">
                    <input className="text-xs" placeholder='Pesquisar...' autoFocus type="text" />
                    <BiSearch />
                </div>
            </Title>

            <div className="sub-title">
                <TabsCategory categories={categories} categCurrent={categCurrent} setCategCurrent={setCategCurrent} />
            </div>

            <div className="tb">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => navigate('/contatos/1')}>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                            <td className="col-actions"> <VscEdit/> <AiOutlineDelete/> </td>
                        </tr>
                        <tr onClick={() => navigate('/contatos/1')}>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                            <td className="col-actions"> <VscEdit/> <AiOutlineDelete/> </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )

}

export default ContatosExternos;
