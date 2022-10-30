var express = require('express');
var geoDB = require('../services/npStorage');
var router = express.Router();

router.get('/geojson/', (req, res, next) => {
  res.status(200).json(geoDB.getGeoJSONs());
});

router.post('/geojson', (req, res, next) => {
  geoDB.addGeoJSON(req.body.geoJSON);
  res.status(200).json({message: "Successfully saved"});
});

router.get('/geojson/delete/:id', (req, res, next) => {
  geoDB.deleteGeoJSONs(req.params.id);
  res.status(200).json({message: "Sucessfully deleted"});
});

module.exports = router;
