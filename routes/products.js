var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  fetch('https://testapi.pfl.com/products?apikey=136085', {
    method: 'GET',
    headers: {
      'Authorization': 'Basic bWluaXByb2plY3Q6UHIhbnQxMjM=',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then(function(data) {
      res.json(data.results)
    })
    .catch(function(error) {
      console.log(error)
    })
})

router.get('/:id', function(req, res, next) {
  fetch('https://testapi.pfl.com/products/' + req.params.id + '?apikey=136085', {
    method: 'GET',
    headers: {
      'Authorization': 'Basic bWluaXByb2plY3Q6UHIhbnQxMjM=',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then(function(data) {
      res.json(data)
    })
    .catch(function(error) {
      console.log(error)
    })
})

module.exports = router;
