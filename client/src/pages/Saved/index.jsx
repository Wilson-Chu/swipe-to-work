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

  return (
    <>
      <h2>My Saved Jobs</h2>

      {savedJobs.length > 0 ? (
        savedJobs.map((job, index) => (
          <SavedJobItem
            key={index}
            job_title={job.job_title}
            company={job.company}
            website={job.website}
          />
        ))
      ) : (
        <p>No saved jobs yet.</p>
      )}
    </>
  );
}

export default Saved;
