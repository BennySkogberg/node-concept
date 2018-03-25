// No third party module required: https is part of the Node.js API
const http = require('http')
// const https = require('https')
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=Florence'
const fetch = require('node-fetch')
const port = 3000

const getLocation = async url => {
  let message = ''
  try {
    const response = await fetch(url)
    const json = await response.json()
    message = (
      `City: ${json.results[0].formatted_address} -`,
      `Latitude: ${json.results[0].geometry.location.lat} -`,
      `Longitude: ${json.results[0].geometry.location.lng}`
    )
    console.log(
      `City: ${json.results[0].formatted_address} -`,
      `Latitude: ${json.results[0].geometry.location.lat} -`,
      `Longitude: ${json.results[0].geometry.location.lng}`
    )
  } catch (error) {
    console.log(error)
  }
  return message
}

getLocation(url)

const requestHandler = (request, response) => {
  console.log(request.url)
  // let message = getLocation(url)

  /*
    https.get(url, res => {
      res.setEncoding('utf8')
      let body = ''
      res.on('data', data => {
        body += data
      })
      res.on('end', () => {
        body = JSON.parse(body)
        console.log(
          `City: ${body.results[0].formatted_address} -`,
          `Latitude: ${body.results[0].geometry.location.lat} -`,
          `Longitude: ${body.results[0].geometry.location.lng}`
        )
        message = `City: ${body.results[0].formatted_address} - Latitude: ${body.results[0].geometry.location.lat} - Longitude: ${body.results[0].geometry.location.lng}`
      })
    })
    */

  response.end('Hello Node.js Server! ')  // + message
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
