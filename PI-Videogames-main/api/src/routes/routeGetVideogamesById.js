const router = require('express').Router();
const videogamesId = require('../controllers/getVideosgamesById');

router.get("/", async(req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "DB" : "API" //Hago un ternanrio para verificar si el id que recibo viene de la api o de la base de datos
    try {
        const foundVideogame = await videogamesId(id, source);
        res.status(200).json(foundVideogame)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

module.exports = router;