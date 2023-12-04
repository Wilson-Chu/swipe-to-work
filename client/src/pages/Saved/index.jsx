import React from "react";
import "./saved.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import SavedJobItem from "./SavedJobItem";
import { useAuth0 } from "@auth0/auth0-react";

function Saved(props) {

  const [savedJobs, setSavedJobs] = useState([]);
  const { isAuthenticated } = useAuth0();

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

  const updateSavedJobMarker = function (id, updatedData) {
    return new Promise((resolve, reject) => {
      axios
        .put(`/api/savedJobs/${id}`, updatedData)
        .then((res) => {
          // Assuming setSavedJobs is a function to update state
          setSavedJobs((prevSavedJobs) =>
            prevSavedJobs.map((job) =>
              job.id === id ? { ...job, ...updatedData } : job
            )
          );
          console.log("Server response:", res.data);
          resolve(res.data.applied); // Resolve with the response data
        })
        .catch((err) => {
          console.log(err.message);
          reject(err); // Reject with the error
        });
    });
  };

  // Filter out duplicates based on job_posting_id
  const uniqueSavedJobs = Array.from(new Set(savedJobs.map((job) => job.job_posting_id))).map(
    (job_posting_id) => {
      return savedJobs.find((job) => job.job_posting_id === job_posting_id);
    }
  );

  return (
    isAuthenticated ? (<div className="saved-jobs-container">
      {!props.modal && <h2 className="no-modal-title">My Saved Jobs</h2>}

      {savedJobs.length > 0 ? (
        <div className="saved-jobs">
          {uniqueSavedJobs.map((job, index) => (
            <div key={index}>
              <SavedJobItem
                id={job.id}
                job={job}
                job_title={job.job_title}
                company={job.company}
                website={job.website}
                deleteSavedJob={deleteSavedJob}
                updateSavedJobMarker={updateSavedJobMarker}
                openModal={props.openModal}
                jobIndex={props.jobIndex}
                modal={props.modal}
                applied={job.applied}
              />
            </div>
          ))}
        </div>
      ) : (
        <p id="msg-no-saved">No saved jobs</p>
      )}
    </div>) : (
      <h2 className="logged-out">
        You must be logged in to use Swipe to Work!
      </h2>
    )
  );
}

export default Saved;
