const baseURL = 'http://localhost:3000'

export default {


  getFlights(){
    return fetch(baseURL)
    .then(res => res.json())
  }

}
