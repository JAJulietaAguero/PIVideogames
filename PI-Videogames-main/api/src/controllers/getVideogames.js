const axios = require('axios');
const { Videogame, Generos } = require('../db');
const { APIKey } = process.env;
const { videogamesAPI } = require('../utils/index');


const allVideogames = async () => {
    const videogamesDB = await Videogame.findAll({
        include: {
            model: Generos
        }
    });
    const infoAPI = (await axios.get(`https://api.rawg.io/api/games?key=${APIKey}`)).data.results;

   const infoMapeada = videogamesAPI(infoAPI)

    return [...videogamesDB, ...infoMapeada];
 }


module.exports = {
    allVideogames
}