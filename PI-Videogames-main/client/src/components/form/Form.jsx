//import React from "react";

const Form = () => {
    return (
        <from>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text"></input>

             <hr style={{ borderStyle: "none"}} />

            <label htmlFor="descripcion">Descripción: </label>
            <input type="text"></input>

             <hr style={{ borderStyle: "none"}} />

            <label htmlFor="Plataformas">Plataformas: </label>
            <input type="text"></input>

             <hr style={{ borderStyle: "none"}} />

            <label htmlFor="fecha de lanzamiento">Fecha de lanzamiento: </label>
            <input type="date"></input>

             <hr style={{ borderStyle: "none"}} />

            <label htmlFor="rating">Rating: </label>
            <input type="number"></input>

             <hr style={{ borderStyle: "none"}} />

            <label htmlFor="imagen">Imagen: </label>
            <input type="url"></input>

             <hr style={{ borderStyle: "none"}} />

            <label htmlFor="generos">Géneros: </label>
            <select>
                <option value="Action">Action</option>
                <option value="Indie">Indie</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Strategy">Strategy</option>
                <option value="Shooter">Shooter</option>
                <option value="Casual">Casual</option>
                <option value="Simulation">Simulation</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Arcade">Arcade</option>
                <option value="Platformer">Platformer</option>
                <option value="Massively Multiplayer">Massively Multiplayer</option>
                <option value="Racing">Racing</option>
                <option value="Sports">"Sports</option>
                <option value="Fighting">Fighting</option>
                <option value="Family">Family</option>
                <option value="Board Games">Board Games</option>
                <option value="Educational">Educational</option>
                <option value="Card">Card</option>
            </select>

             <hr style={{ borderStyle: "none"}} />

            <button type="submit">Crear</button>
        </from>
    )
}

export default Form;

// *Debe tener los siguientes campos para crear un videojuego: 
// Nombre, Imagen, Descripción, Plataformas, Fecha de lanzamiento y Rating
// *Debe tener un botón desplegable para poder seleccionar/agregar varios géneros en simultáneo
// *Debe tener un botón "Crear videojuego"