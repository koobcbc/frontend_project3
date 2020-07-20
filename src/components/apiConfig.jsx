let apiUrl
const apiUrls = {
    //deployed api url
  production: 'https://sei-items-api.herokuapp.com/api',
  development: 'http://localhost:3000/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl