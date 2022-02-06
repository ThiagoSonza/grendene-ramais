import "./style.css"

function MenuIcon({ setShowMenu, showMenu }) {

    return (

        <div className="icon" onClick={() => setShowMenu(!showMenu)}>
            <svg className="outside-square" viewBox="0 0 110 110" zoomAndPan="disable" preserveAspectRatio="none">
                <path d="M0 0, L30 0, L30 30, L0 30, Z" />
                <path d="M40 0, L70 0, L70 30, L40 30, Z" />
                <path d="M80 0, L110 0, L110 30, L80 30, Z" />

                <path d="M0 40, L30 40, L30 70, L0 70, Z" />
                <path d="M40 40, L70 40, L70 70, L40 70, Z" />
                <path d="M80 40, L110 40, L110 70, L80 70, Z" />

                <path d="M0 80, L30 80, L30 110, L0 110, Z" />
                <path d="M40 80, L70 80, L70 110, L40 110, Z" />
                <path d="M80 80, L110 80, L110 110, L80 110, Z" />
            </svg>
            <span> Sistema de Controle de Contatos </span>
            <span className='mobile-only'> SCC </span>
        </div>

    )

}

export default MenuIcon