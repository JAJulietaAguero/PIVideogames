const axios = require('axios');
const { Videogame } = require('../db');
const { APIKey } = process.env;
const { videogamesAPI } = require('../utils/index');

const videogameName = async (name) => {
    const videogamesDB = await Videogame.findAll({
        where: {
            nombre: name,
        },
        limit: 15
    });

    const infoAPI = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${APIKey}`)).data.results;
    
    var infoMapeada = [];

    if (infoAPI.length !=0 ) {
         infoMapeada = videogamesAPI(infoAPI)
    }

      
        const infoResults =  [...infoMapeada, ...videogamesDB];
    
        if (infoResults.length === 0) {
            return {error: `No se encontraron videojuegos con el nombre ${name}`}
        }
        return infoResults.slice(0, 15);
    
    
}




module.exports = {
    videogameName
}