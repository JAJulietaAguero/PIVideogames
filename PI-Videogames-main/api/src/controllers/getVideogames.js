const axios = require('axios');
const { Videogame, Generos } = require('../db');
const { APIKey } = process.env;


const allVideogames = async () => {
    const videogamesDB = await Videogame.findAll({
        include: {
            model: Generos
        }
    });
    const infoAPI= (await axios.get(`https://api.rawg.io/api/games?key=${APIKey}`)).data;

    let infoCleaned = infoAPI.data.results.map(videogame => {
        return {
            id: videogame.id,
            nombre: videogame.name,
            descripcion: videogame.description,
            plataformas: videogame.platforms.map((elem) => {
                return elem.platform.name
            }),
            imagen: videogame.background_image,
            lanzamiento: videogame.released,
            rating: videogame.rating
        }
    })
    
    const videogamesAPI = infoCleaned(infoAPI);

    return [...videogamesDB, ...videogamesAPI];
 }


module.exports = {
    allVideogames
}