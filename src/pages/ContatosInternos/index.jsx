import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Title from "../../components/Title"
import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";

function ContatosInternos() {

    const navigate = useNavigate()

    return (
        <div className="content">

            <Title label="Contatos Internos">
                <div className="search">
                    <input className="text-xs" placeholder='Pesquisar...' autoFocus type="text" />
                    <BiSearch />
                </div>
            </Title>

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

export default ContatosInternos;
