'use strict';

const express = require('express');
//const TvShow = require('./TvShow');
const TvShowService = require('./TvShowService');
//
const tvShowRouter = express.Router();


//GET http://localhost:3000/tvshow/
tvShowRouter.get('/', (req, res) => {
  //res.json(tvShows);
  res.json(tvShowsService.getAll());
});

//GET http://localhost:3000/tvshow/1
tvShowRouter.get('/{id}', (req, res) => {
  res.json(tvShowsService.getAll().getElementById('id'));
});

