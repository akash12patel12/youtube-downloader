let config;
const axiosk = require("axios");
require('dotenv').config();
exports.getIt = (req, res) => {
  const id = req.body.id;

const options = {
    method: 'GET',
    url: process.env.URL,
    params: {id:  id},
    headers: {
      'X-RapidAPI-Key': process.env.KEY,
      'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
    }
  };
  
  axiosk
    .request(options)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });
};
