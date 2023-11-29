import axios from "axios"

function fetchData() {
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: 'developer in california',
      date_posted: 'all',
      country: 'CA'
    },
    headers: {
      'X-RapidAPI-Key': 'd914f1a3dcmshf64c1f3e8b4277dp1f067ejsn38af48253647',
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


// Call the fetchData function
// fetchData()
//   .then(data => {
//     // Handle the data if needed
//     console.log('Data retrieved:', data);
//   })
//   .catch(error => {
//     // Handle the error
//     console.error('Error fetching data:', error);
//   });
