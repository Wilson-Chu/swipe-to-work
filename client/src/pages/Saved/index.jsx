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
    <div className="saved-jobs-container">
      {!props.modal && <h2 className="no-modal-title">My Saved Jobs</h2>}

      {savedJobs.length > 0 ? (
        <div className="saved-jobs">
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
            </div>
          ))}
        </div>
      ) : (
        <p>No saved jobs</p>
      )}
    </div>
  );
}

export default Saved;
