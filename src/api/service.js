import axios from 'axios'

const Service = {
  constructor () {
  },

  get (city, code) {
    axios({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${code}&APPID=d23058db742db7cb6fe57437bd010579`,
      responseType: 'json'
    })
    .then ( (response) => {
      return response
    })
    .catch ( (error) => {
      console.log(error)
    } )
  }
}

export default Service