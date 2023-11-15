const Card = ({ nombre, generos, imagen }) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <h2>{generos}</h2>
            <img src={imagen} alt={nombre}/>
        </div>
    )
}

export default Card;