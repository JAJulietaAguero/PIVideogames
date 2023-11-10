const { Router } = require('express');
const routeGetVideogames = require('./routeGetVideogames');
const routeGetVideogamesById
= require('./routeGetVideogamesById');
const routeGetGenres = require('./routeGetGenres');
const routePostVideogames = require('./routePostVideogames');

const router = Router();

router.use("/videogames", routeGetVideogames);
router.use("/videogames", routeGetVideogamesById);
router.use("/videogames", routePostVideogames);
router.use("/genres", routeGetGenres);


module.exports = router;
