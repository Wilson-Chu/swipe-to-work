import React from "react";
import "./saved.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import SavedJobItem from "./SavedJobItem";
import useApplicationData from "../../hooks/useApplicationData";
import JobDetailsModal from "../Home/JobDetailsModal";

function Saved(props) {
  const { jobs, jobIndex, modal, openModal, closeModal, nextJob } =
    useApplicationData();

  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/savedJobs")
      .then((res) => {
        setSavedJobs(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteSavedJob = function (id) {
    axios
      .delete(`/api/savedJobs/${id}`)
      .then((res) => {
        setSavedJobs(savedJobs.filter((item) => item.id !== id));
      })
      .catch((err) => {
        setError(err.message);
      });

    setSavedJobs(savedJobs.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2>My Saved Jobs</h2>

      {savedJobs.length > 0 ? (
        <>
          {savedJobs.map((job, index) => (
            <div key={index}>
              <SavedJobItem
                id={job.id}
                job_title={job.job_title}
                company={job.company}
                website={job.website}
                deleteSavedJob={deleteSavedJob}
                openModal={openModal}
              />
              {!!modal && (
                <JobDetailsModal
                  jobs={jobs}
                  closeModal={closeModal}
                  jobIndex={3}
                />
              )}
            </div>
          ))}
        </>
      ) : (
        <p>No saved jobs.</p>
      )}
    </>
  );
}

export default Saved;
