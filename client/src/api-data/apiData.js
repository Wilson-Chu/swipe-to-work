import axios from "axios"

function fetchData() {
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: 'developer in Canada',
      date_posted: 'all',
      country: 'CA'
    },
    headers: {
      'X-RapidAPI-Key':
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  return axios.request(options)
    .then(response => {
      console.log(response.data.data);
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export default fetchData;