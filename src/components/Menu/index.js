import { useEffect, useRef, useState } from 'react'
import './style.css'

function Menu() {

    const [menu, setMenu] = useState()

    function handleShowItens(submenu) {
        setMenu(submenu)
    }

    function mouseOut(e) {
        if (menu)
            setMenu('')
    }

    return (
        <>
            <div className="menu">

                <span> Sistema Interno Sistema </span>

            </div>

            <div className="submenu" onMouseLeave={mouseOut}>
                <div id="cadastros" className="item-submenu" onMouseOver={() => handleShowItens('cadastros')}>
                    <span>Cadastros</span>
                    {menu === 'cadastros' &&
                        <div onMouseLeave={mouseOut}>
                            <div className="item"> Padrões </div>
                            <div className="item"> Usuários </div>
                            <div className="item"> Perfis </div>
                        </div>
                    }
                </div>
                <div id="consultas" className="item-submenu" onMouseOver={() => handleShowItens('consultas')}> 
                    <span>Consultas</span>
                    {menu === 'consultas' &&
                        <div onMouseLeave={mouseOut}>
                            <div className="item"> aa </div>
                            <div className="item"> bb </div>
                            <div className="item"> cc </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )

}

export default Menu