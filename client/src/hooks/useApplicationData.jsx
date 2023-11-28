// import axios from "axios";
// import {useCallback, useEffect, useState} from "react";

// const useApplicationData = function() {
//   const [error, setError] = useState();
//   const [status, setStatus] = useState({});
//   const [realData, setRealData] = useState([]);

//   const fetchItems = useCallback(() => {
//     axios.get('/api/savedJobs')
//       .then(response => {
//         setRealData(response.data);
//       })
//       .catch(err => {
//         console.log(err.message);
//         setError(err.message);
//       });
//   }, []);

//   // Fetch data on first render
//   useEffect(() => {
//     fetchItems();
//   }, []);

//   return {status, error, realData, fetchItems};
// };

// export default useApplicationData;