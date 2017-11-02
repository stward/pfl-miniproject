var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')

router.post('/', function(req, res, next) {
  const orderData = req.body
  console.log(orderData.deliveryMethod)
  console.log(orderData.product)
  console.log(orderData)
  fetch('https://testapi.pfl.com/orders?apikey=136085', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic bWluaXByb2plY3Q6UHIhbnQxMjM=',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "orderCustomer": {
          "firstName": "John",
          "lastName": "Doe",
          "companyName": "ACME",
          "address1": "1 Acme Way",
          "address2": "",
          "city": "Livingston",
          "state": "MT",
          "postalCode": "59047",
          "countryCode": "US",
          "email": "jdoe@acme.com",
          "phone": "1234567890"
      },
      "items": [
          {
              "itemSequenceNumber": 1,
              "productID": 9876,
              "quantity": 100
          }
      ],
      "shipments": [
          {
              "shipmentSequenceNumber": 1,
              "firstName": "John",
              "lastName": "Doe",
              "companyName": "ACME",
              "address1": "1 Acme Way",
              "address2": "",
              "city": "Livingston",
              "state": "MT",
              "postalCode": "59047",
              "countryCode": "US",
              "phone": "1234567890",
              "shippingMethod": "FDXG",
              "IMBSerialNumber":"004543450"
          }
      ],
      "itemShipments":[
          {
              "itemSequenceNumber": 1,
              "shipmentSequenceNumber":1
          }
      ]
    })
  })
    .then((res) => res.json())
    .then(function(data) {
      console.log(data)
      res.json(data.results.data.orderNumber)
    })
    .catch(function(error) {
      console.log(error)
    })
})

module.exports = router;
