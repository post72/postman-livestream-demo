const express = require('express');
const videos = require('../services/videos');
const router = new express.Router();
 
router.get('/all', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await videos.allVideos(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:videoId', async (req, res, next) => {
  let options = { 
    "videoId": req.params.videoId,
  };


  try {
    const result = await videos.oneVideo(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;