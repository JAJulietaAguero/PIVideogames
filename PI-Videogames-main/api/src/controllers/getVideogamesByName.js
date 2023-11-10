const axios = require('axios');
const { Videogame } = require('../db');
const { APIKey } = process.env;

const videogameName = async (name) => {
    const videogamesDB = await Videogame.findAll({
        where: {
            nombre: name,
        },
        limit: 15
    });

    const infoAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}?key=${APIKey}`).data.results;
    
    const videogamesFiltered = videogamesAPI.filter((videogame) => videogame.nombre.toLowerCase().includes(name.toLowerCase()));
    
    const videogamesAPI = videogameInfo(infoAPI);

    const infoResults =  [...videogamesFiltered, ...videogamesDB];

    if (infoResults.length === 0) {
        return {error: "No se encontraron coincidencias"}
    }
    return infoResults.slice(0, 15);
}






module.exports = {
    videogameName
}