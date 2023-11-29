// import axios from 'axios';
// import { useEffect } from 'react';

// // app.get('/search', async (req, res) => {
// //   try {
// //     const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
// //       params: req.query, // Forward query parameters from the client to the JSearch API
// //       headers: {
// //         'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Add your RapidAPI key for authentication
// //       },
// //     });
// //     res.json(response.data);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// // Inside your React component or page

// useEffect(() => {
// });

// const searchData = async (query) => {

//   try {
//     const response = await fetch(`/search?query=${query}`);
//     const data = await response.json();
//     console.log(data.data[0]);
//   } catch (error) {
//     console.error(error);
//   }
  
// };

// const options = {
//   method: 'GET',
//   url: 'https://jsearch.p.rapidapi.com/search',
//   params: {
//     query: `Web Developer in Toronto, ON`,
//     remote_jobs_only: `true`,
//     employment_types: 'FULLTIME',
//     job_requirements: 'no_experience',
//     country: 'CA'
//   },
//   headers: {
//     'X-RapidAPI-Key': '5aa7785208mshe77aa59d6e7bb11p11eac8jsn07f201725492',
//     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//   }
// };

// const testSearchAPI = async (options) => {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// testSearchAPI(options)

// export default searchData;

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
      'X-RapidAPI-Key': '5aa7785208mshe77aa59d6e7bb11p11eac8jsn07f201725492',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  return axios.request(options)
    .then(response => {
      console.log(response.data.data[0]);
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export default fetchData;
