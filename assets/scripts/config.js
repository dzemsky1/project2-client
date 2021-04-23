'use strict'

let apiUrl
const apiUrls = {
  production: 'https://project-2-davidzemsky.herokuapp.com', // later change with my HerokuUrl
  development: 'http://localhost:4741' //change with http://localhost:4741
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
