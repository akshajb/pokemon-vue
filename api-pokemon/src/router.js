const express = require('express');
const router = express.Router();
const regions_ctrl = require('../controllers/regions')
const pokedex_ctrl = require('../controllers/pokedex')
const pokemon_ctrl = require('../controllers/pokemon')

router.get('/region-list', regions_ctrl.getregionlist)

router.get('/region/:name', regions_ctrl.getregionbyname)

router.get('/pokedex-list', pokedex_ctrl.getpokedexslist)

router.get('/pokedex/:name', pokedex_ctrl.getpokedexbyname)

router.get('/pokemon/:name', pokemon_ctrl.getpokemonbyname)

router.get('/' ,pokedex_ctrl.getallpokedex)

module.exports = router;