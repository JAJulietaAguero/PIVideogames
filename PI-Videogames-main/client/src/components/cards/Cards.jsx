import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from '../../redux/actions';
import Card from '../card/Card';

const Cards = () => {
    const dispatch = useDispatch();
    const { allVideogames } = useSelector((state) => state);

    React.useEffect(() => {
        dispatch(getAllVideogames());
    }, [dispatch])
    return (
        <div>
            {
                allVideogames?.map((videogame) => {
                    return (
                        <Card
                          key = {videogame.id}
                          nombre = {videogame.nombre}
                          generos = {videogame.generos}
                          imagen = {videogame.imagen}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;