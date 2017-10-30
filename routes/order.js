var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')

router.post('/', function(req, res, next) {
  fetch('https://testapi.pfl.com/orders?apikey=136085', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic bWluaXByb2plY3Q6UHIhbnQxMjM=',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "partnerOrderReference": "MyReferenceNumber",
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
              "productID": 1234,
              "quantity": 1000,
              "productionDays": 4,
              "partnerItemReference": "MyItemReferenceID",
              "itemFile": "http://www.yourdomain.com/files/printReadyArtwork1.pdf"
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
      "payments":[
          {
              "paymentMethod": "methodname",
              "paymentID": "methodid",
              "paymentAmount": 3.00
          }
      ],
      "itemShipments":[
          {
              "itemSequenceNumber": 1,
              "shipmentSequenceNumber":1
          }
      ],
      "webhooks":[
          {
              "type":"status",
              "callbackUri": "https://www.pfl.com/callback",
              "callbackHeaders": {
                  "header_field_sample1": "header_value_sample1",
                  "header_field_sample2": "header_value_sample2"
              }
          }
      ],
      "billingVariables":[
          {
              "key":   "BillingVariable1Name",
              "value": "BillingVariable1Value"
          },
          {
              "key":   "BillingVariable2Name",
              "value": "BillingVariable2Value"
          }
      ]
    })
  })
    .then((res) => res.json())
    .then(function(data) {
      res.json('Order #12345')
    })
    .catch(function(error) {
      console.log(error)
    })
})

module.exports = router;
