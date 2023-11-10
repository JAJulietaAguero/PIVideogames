const axios = require('axios');
const { Generos } = require('../db');
const { APIKey } = process.env;

const getGenres = async () => { await axios.get(`https://api.rawg.io/api/genres?key=${APIKey}`)
    .then(async (response) => {
        const data = response.data.results;
        const genres = data.map((genre) => genre.name);
        const newGenre = await Generos.bulkCreate(genres.map((name) => ({ name})));
        return newGenre;
    })
}


module.exports + {
    getGenres
}