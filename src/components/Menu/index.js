import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import './style.css'
import { FiChevronDown } from "react-icons/fi";
import { SiMicrosoftedge } from "react-icons/si";
import MenuIcon from '../MenuIcon';

function Menu() {

    const [menu, setMenu] = useState()
    const [showSubMenu, setShowSubMenu] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const wrapperRef = useRef(null)
    const navigate = useNavigate()

    function handleShowItens(submenu) {
        setMenu(submenu)
    }

    function mouseOut(e) {
        if (menu)
            setMenu('')
    }

    function useOutsideMenu(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowSubMenu(false)
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref])
    }

    function handleLogout() {
        navigate('login')
    }

    useOutsideMenu(wrapperRef)

    function redirectPage(url) {
        setMenu()
        navigate(url)
    }

    return (
        <>
            <div className="menu">
                <MenuIcon showMenu={showMenu} setShowMenu={setShowMenu} />
                <div className="actions">
                    <div>
                        <span> ? </span>
                    </div>
                    <div ref={wrapperRef} onClick={() => setShowSubMenu(!showSubMenu)}>
                        <span> TS </span>
                        {showSubMenu &&
                            <div className="actions-menu">
                                <div className="actions-menu-image">
                                    <span> TS </span>
                                </div>
                                <div className="actions-menu-dropdown">
                                    <span style={{ fontSize: "1.2rem" }}> Thiago Sonza </span>
                                    <span style={{ fontSize: "0.65rem" }}> thiago.sonza@grendene.com.br </span>
                                    <span style={{ fontSize: "0.65rem" }} onClick={handleLogout}> Sair </span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <aside className={`${showMenu ? "menu-active" : ""}`}>
                <MenuIcon showMenu={showMenu} setShowMenu={setShowMenu} />
                <div className="aside-content">
                    <Link to={'/'}> <SiMicrosoftedge/> ASG </Link>
                    <Link to={'/'}> <SiMicrosoftedge/> SGA </Link>
                    <Link to={'/'}> <SiMicrosoftedge/> SIS </Link>
                    <Link to={'/'}> <SiMicrosoftedge/> SCC </Link>
                    <Link to={'/'}> <SiMicrosoftedge/> EBTA </Link>
                </div>
            </aside>

            <div className="submenu" onMouseLeave={mouseOut}>
                <div id="cadastros" className="item-submenu" onMouseOver={() => handleShowItens('cadastros')}>
                    <span> Contatos </span>
                    <FiChevronDown />
                    {menu === 'cadastros' &&
                        <div onMouseLeave={mouseOut}>
                            <div className="item" onClick={() => redirectPage('/contatosInternos')}> Internos </div>
                            <div className="item" onClick={() => redirectPage('/contatosExternos')}> Externos </div>
                        </div>
                    }
                </div>
                <div id="consultas" className="item-submenu" onMouseOver={() => handleShowItens('consultas')}>
                    <span> Administração  </span>
                    <FiChevronDown />
                    {menu === 'consultas' &&
                        <div onMouseLeave={mouseOut}>
                            <div className="item" onClick={() => redirectPage('/novoContato')}> Novo Contato </div>
                            <div className="item" onClick={() => redirectPage('/importacao')}> Importar </div>
                            <div className="item" onClick={() => redirectPage('/exportacao')}> Exportar </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Menu