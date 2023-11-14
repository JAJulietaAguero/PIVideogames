const router = require('express').Router();
const  { getGenres } = require('../controllers/getGenres');

router.get("/", async(req, res) => {
    try {
        const newGenre = await getGenres();
        res.status(200).json(newGenre);
        
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

module.exports = router;