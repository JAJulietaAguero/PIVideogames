const { Videogame } = require('../db');

const createVideogame = async (nombre, descripcion, plataformas, imagen, lanzamiento, rating, generos) => {
   const videog = await Videogame.create({ nombre: nombre, descripcion: descripcion, plataformas: plataformas, imagen: imagen, lanzamiento: lanzamiento, rating: rating});
    
   await videog.setGeneros(generos)

   return videog
};


module.exports = {
    createVideogame
}