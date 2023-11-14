import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const params = useParams();
    const [videogame, setVideogame] = React.useState({});

    React.useEffect(() => {
        axios(`http://localhost:3001/videogames/${params?.id}`)
        .then(({ data }) => {
            if (data.name) {
                setVideogame(data);
            } else {
                alert(`No hay videojuegos con ese ID`)
            }
        })
    .catch(() => {
        console.log('Se rompió');
    })
     return setVideogame({})
    }, [params?.id])

    return (
        <div>
            <h2>{videogame?.id}</h2>
            <h2>{videogame?.nombre}</h2>
            <h2>{videogame?.imagen}</h2>
            <h2>{videogame?.plataformas}</h2>
            <h2>{videogame?.descripcion}</h2>
            <h2>{videogame?.lanzamiento}</h2>
            <h2>{videogame?.rating}</h2>
            <h2>{videogame?.generos}</h2>
        </div>
    )
}

export default Detail;