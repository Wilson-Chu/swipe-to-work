import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useApplicationData = function () {

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
