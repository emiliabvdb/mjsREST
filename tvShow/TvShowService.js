'use strict';

class TvShowService {
  constructor() {
    this.tvShows = [];
  }
  getAll() {
    return this.tvShows;
  }
}
module.exports = new TvShowService();