const axios = require('axios');
const { Videogame, Generos } = require('../db');
const { APIKey } = process.env;
const { videogamesAPI } = require('../utils/index');


const videogamesId = async (id, source) => {
  
    const videogame = source === "API" ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKey}`)).data
    : (await Videogame.findOne({
        where: {id},
        include: [{
            model: Generos
        }]
    }));
   
    if (source === "API") {
        return videogamesAPI(videogame)
    } else {
        return videogame
    }
   
}

module.exports = {
    videogamesId
}