const router = require('express').Router();
const { createVideogame } = require('../controllers/postVideogames');

router.post("/", async (req, res) => {
    const { nombre, descripcion, plataformas, imagen, lanzamiento, rating, generos } = req.body;
    try {
        const createdVideogame = await createVideogame(nombre, descripcion, plataformas, imagen, lanzamiento, rating, generos);
        res.status(200).json(createdVideogame)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

module.exports = router;