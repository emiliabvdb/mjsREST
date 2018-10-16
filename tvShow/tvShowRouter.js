const express = require('express');
const TvShow = require('./TvShow');
const tvShowRouter = express.Router();
const tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Drama')];

//GET http://localhost:3000/tvshow/
tvShowRouter.get('/tvshow/', (req, res) => {
  res.json(tvShows);
});