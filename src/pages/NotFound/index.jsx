import { useNavigate } from 'react-router-dom';
import "./style.css"

function NotFound() {

    const navigate = useNavigate()

    return (
        <div className="msg-error">
            <h1> 404 </h1>
            <h5> Pagina não encontrada. </h5>
            <button onClick={() => navigate(-1)}> Voltar </button>
        </div>
    )

}

export default NotFound