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
  // Need product detail api to work for this
  // fetch('https://testapi.pfl.com/products/' + req.params.id + '?apikey=136085', {
  fetch('https://testapi.pfl.com/products?apikey=136085', {
    method: 'GET',
    headers: {
      'Authorization': 'Basic bWluaXByb2plY3Q6UHIhbnQxMjM=',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then(function(data) {
      let id = Number(req.params.id)
      function findProduct(product) {
        return product.id === id
      }
      const product = data.results.data.find(findProduct)
      console.log(product)
      res.json(product)
    })
    .catch(function(error) {
      console.log(error)
    })
})

module.exports = router;
