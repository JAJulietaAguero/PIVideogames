const { Videogame } = require('../db');

const createVideogame = async (nombre, descripcion, plataformas, imagen, lanzamiento, rating) => {

    return await Videogame.create({ nombre, descripcion, plataformas, lanzamiento, rating});
    
};


module.exports = {
    createVideogame
}