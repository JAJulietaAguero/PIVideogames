const router = require('express').Router();
const allVideogames = require('../controllers/getVideogames');
const videogameName = require('../controllers/getVideogamesByName');

router.get("/", async(req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const videojuego = await videogameName(name);
            res.status(200).json(videojuego);
        } else {
            const allVideojuegos = await allVideogames();
            res.status(200).json(allVideojuegos);
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

module.exports = router;