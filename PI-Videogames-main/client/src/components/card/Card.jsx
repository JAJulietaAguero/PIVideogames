const Card = ({nombre, generos, imagen}) => {
    return (
        <div style={{backgroundColor: "black", color: "white", borderRadius: "30px", padding: "16px", margin: "16px"}}>
            <h2>{nombre}</h2>
            <h2>Géneros: {generos}</h2>
            <img src={imagen} alt={nombre}/>
        </div>
    )
}

export default Card;