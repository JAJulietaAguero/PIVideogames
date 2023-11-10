const axios = require('axios');
const { Videogame } = require('../db');
const { APIKey } = process.env;


const videogamesId = async (id, source) => {
    const videogame = source === "API" ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKey}`)).data 
    : await Videogame.findByPk(id);
    return videogame;
}

module.exports = {
    videogamesId
}