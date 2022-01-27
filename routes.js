module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/videos', require('./routes/videos.route'));

};
