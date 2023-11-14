const videogamesAPI = (videogames) => {

   if (videogames.length) {

    return  videogames.map((videogame) => {
        return {
            id: videogame.id,
            nombre: videogame.name,
            descripcion: videogame.description,
            plataformas: videogame.platforms.map((elem) => {
                return elem.platform.name
            }),
            imagen: videogame.background_image,
            lanzamiento: videogame.released,
            rating: videogame.rating,
            generos: videogame.genres.map((elem) => {
                return {
                    id: elem.id,
                    nombre: elem.name
                }
            })
            
        }
    })
   } else {
    const videogameDB = {
        id: videogames.id,
        nombre: videogames.name,
        descripcion: videogames.description,
        plataformas: videogames.platforms.map((elem) => {
            return elem.platform.name
        }),
        imagen: videogames.background_image,
        lanzamiento: videogames.released,
        rating: videogames.rating,
        generos: videogames.genres.map((elem) => {
            return {
                id: elem.id,
                nombre: elem.name
            }
        })
    }
    return videogameDB
   }

} 

module.exports = {
    videogamesAPI
}