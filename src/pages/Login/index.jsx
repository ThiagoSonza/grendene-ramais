import './style.css'
import image from '../../assets/img/logo-grendene.svg';
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleLogin() {
        setIsLoading(true)

        // faz a requisicao para a API de login no AD 

        setIsLoading(false)

        navigate('/')
    }

    return (
        <div className='main'>
            <div className="login">

                <form action="" onSubmit={handleLogin}>
                    <img src={image} alt="" />

                    <input autoFocus type="text" placeholder='Login' />

                    <input type="password" placeholder='Senha' />

                    <button type='submit' disabled={isLoading} onClick={handleLogin}> {isLoading ? "Conectando" : "Login"} </button>
                </form>

            </div>
        </div>

    )

}

export default Login