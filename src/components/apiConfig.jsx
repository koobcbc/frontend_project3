let apiUrl
const apiUrls = {
    //deployed api url
  production: 'https://icecream-yum-api.herokuapp.com/api',
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl