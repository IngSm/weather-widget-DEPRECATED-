import axios from 'axios'

export function get (city, code) {
  axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${code}&APPID=d23058db742db7cb6fe57437bd010579`,
  })
  .then ( function (response) {
    return response
  })
  .catch ( function (error) {
    console.log(error)
  } )
}

