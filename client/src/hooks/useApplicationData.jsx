import axios from "axios";
import { useCallback, useEffect, useState } from "react";
// axios.defaults.baseURL = 'http://localhost:8080';

const useApplicationData = function () {
  //   const [error, setError] = useState();
  //   const [status, setStatus] = useState({});
  //   const [realData, setRealData] = useState([]);

  //    const fetchItems = useCallback(() => {
  //   Promise.all([axios.get('/api/status'), axios.get('/api/items')])
  //     .then(all => {
  //       setStatus(all[0].data);
  //       setData(all[1].data);
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //       setError(err.message);
  //     });
  // }, []);

  //   // Fetch data on first render
  //   useEffect(() => {
  //     fetchItems();
  //   }, []);

  //   return {status, error, realData, fetchItems};

  const [jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);
  const [modal, setModal] = useState(false);


  const fetchItems = useCallback(() => {
   
    axios
      .get("/api/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => console.log(error.message));
  });

  // const fetchPrefs = useCallback(() => {
  //   axios
  //     .get("/api/prefs")
  //     .then((res) => {
  //       console.log("PREFS", res);
  //     })
  //     .catch((error) => console.log(error.message));
  // });

  // Fetch data on first render
  useEffect(() => {
    console.log("Heloo!!!");
    fetchItems();
  }, []);


  const openModal = function () {
    setModal(true);
  };

  const closeModal = function () {
    setModal(false);
  };

  const nextJob = function () {
    setJobIndex((prev) => prev + 1);
  };

  return { jobs, jobIndex, modal, fetchItems, openModal, closeModal, nextJob };
};

export default useApplicationData;
