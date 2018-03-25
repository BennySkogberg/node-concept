const fetch = require('node-fetch')

async function fetchAvatarUrl (userId) {
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const data = await response.json()
  console.log(data.imageUrl)
  /*
    return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
      .then(response => response.json())
      .then(data = data.imageUrl)
  */
}

fetchAvatarUrl(123)
