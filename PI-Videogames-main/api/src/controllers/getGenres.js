const axios = require('axios');
const { Generos } = require('../db');
const { APIKey } = process.env;

const getGenres = async () => {
    
    const genresAPI = (await axios.get(`https://api.rawg.io/api/genres?key=${APIKey}`)).data.results;
    genresAPI.forEach(async genre => {
        await Generos.findOrCreate({
            where: {
                id: genre.id,
                nombre: genre.name
            }
        })
    })

    const infoMapeada = genresAPI.map(genre => {
        return {
            id: genre.id,
            nombre: genre.name
        }
    })

    return infoMapeada;
}

module.exports = {
    getGenres
}