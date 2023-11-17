import Button from "../button/Button";
import Searchbar from "../searchbar/Searchbar";

const Nav = () => {
    return (
        <nav>
            <Button
                path='/form'
                text='Crear videojuego'
            />
            {/* <Button
                path='/home'
                text='Filtrar'
            />
            <Button
                path='/home'
                text='Ordenar'
            /> */}
            <Searchbar />
            <select>
                <option>Ordenar</option>
            </select>
            <select>
                <option>Terror</option>
                <option>Acción</option>
                <option>Rompecabezas</option>
            </select>
        </nav>
    )
}

export default Nav;