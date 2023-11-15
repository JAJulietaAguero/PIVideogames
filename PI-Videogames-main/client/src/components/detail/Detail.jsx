import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getVideogameDetail, cleanDetail } from '../../redux/actions';

const Detail = () => {
    const params = useParams();
    const [videogame, setVideogame] = React.useState({});
    // const dispatch = useDispatch();
    // const { videogameDetail } = useSelector((state) => state)

    React.useEffect(() => {
        axios(`http://localhost:3001/videogames/${params?.id}`)
        .then(({ data }) => {
            if(data.nombre) {
                setVideogame(data);
            } else {
                alert('No se encontraron videojuegos con ese ID')
            }
        })
        .catch(() => {
            console.log('Se rompió')
        })
        return setVideogame({});
    }, [params?.id])

    return (
        <div>
            <h2>{videogame?.nombre}</h2>
            <p><b>ID:</b> {videogame?.id}</p>
            <p><b>Plataformas:</b> {videogame?.plataformas}</p>
            <p><b>Descripción:</b> {videogame?.descripcion}</p>
            <p><b>Fecha de lanzamiento:</b> {videogame?.lanzamiento}</p>
            <p><b>Rating:</b> {videogame?.rating}</p>
            <p><b>Géneros:</b> {videogame?.generos}</p>
            <img src= {videogame?.imagen} alt= {videogame?.nombre}/>
        </div>
    )
}

export default Detail;