import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <nav >
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Catalogo
                </li>
                <li>
                    Destacados
                </li>
                <li>
                    Mi cuenta
                </li>
            </ul>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default NavBar;