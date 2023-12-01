import React from "react";
import "./saved.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import SavedJobItem from "./SavedJobItem";

function Saved(props) {

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
                job={job}
                job_title={job.job_title}
                company={job.company}
                website={job.website}
                deleteSavedJob={deleteSavedJob}
                openModal={props.openModal}
                jobIndex={props.jobIndex}
                modal={props.modal}
              />
              {/* {!!props.modal && (
                <JobDetailsModal
                  jobs={savedJobs}
                  closeModal={props.closeModal}
                  jobIndex={props.jobIndex}
                />
              )} */}
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
